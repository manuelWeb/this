function userWidowSize() {
  const isClient = typeof window === 'object'
  function getSize() {
    return {
      width: isClient ? window.innerWidth : undefined,
      height: isClient ? window.innerHeight : undefined
    }
  }
  return (getSize().width !== undefined && getSize()) || null
}

// use case
const size = userWidowSize()

console.log(size);