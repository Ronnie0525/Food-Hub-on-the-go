import { createContext, useContext, useEffect, useMemo, useReducer, useState } from 'react'

const CartContext = createContext(null)
const STORAGE_KEY = 'fhotg-cart'

// Items are keyed by dish name (names are unique across the menu).
function reducer(state, action) {
  switch (action.type) {
    case 'add': {
      const { item } = action
      const existing = state[item.name]
      return {
        ...state,
        [item.name]: {
          name: item.name,
          image: item.image,
          price: item.price,
          qty: (existing?.qty || 0) + 1,
        },
      }
    }
    case 'decrement': {
      const existing = state[action.name]
      if (!existing) return state
      if (existing.qty <= 1) {
        const next = { ...state }
        delete next[action.name]
        return next
      }
      return { ...state, [action.name]: { ...existing, qty: existing.qty - 1 } }
    }
    case 'remove': {
      const next = { ...state }
      delete next[action.name]
      return next
    }
    case 'clear':
      return {}
    default:
      return state
  }
}

function init() {
  if (typeof window === 'undefined') return {}
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY)
    return raw ? JSON.parse(raw) : {}
  } catch {
    return {}
  }
}

export function CartProvider({ children }) {
  const [items, dispatch] = useReducer(reducer, undefined, init)
  const [isOpen, setOpen] = useState(false)

  // Persist on change.
  useEffect(() => {
    try {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(items))
    } catch {
      /* ignore quota / privacy-mode errors */
    }
  }, [items])

  const list = useMemo(() => Object.values(items), [items])
  const count = useMemo(() => list.reduce((n, i) => n + i.qty, 0), [list])

  const value = useMemo(
    () => ({
      items: list,
      count,
      isOpen,
      openCart: () => setOpen(true),
      closeCart: () => setOpen(false),
      addItem: (item) => {
        dispatch({ type: 'add', item })
        setOpen(true)
      },
      increment: (item) => dispatch({ type: 'add', item }),
      decrement: (name) => dispatch({ type: 'decrement', name }),
      removeItem: (name) => dispatch({ type: 'remove', name }),
      clear: () => dispatch({ type: 'clear' }),
      qtyOf: (name) => items[name]?.qty || 0,
    }),
    [list, count, isOpen, items],
  )

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}

export function useCart() {
  const ctx = useContext(CartContext)
  if (!ctx) throw new Error('useCart must be used within a CartProvider')
  return ctx
}
