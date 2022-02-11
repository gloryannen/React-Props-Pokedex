// Returns a randomly selected item from array of items

function choice (items) {
  let i = Math.floor(Math.random() * items.length);
  return items[i];
}

// Removes the first matching item from items, if item exists, and returns it. Otherwise returns undefined.

function remove (item, items) {
  items.findIndex(i => item === items[i])
  return items.splice(items, 1)
}

export { choice, remove };