export function editHandler(event, editOptionFormSettings, node) {
  const action = event.target.dataset.action
  if (!action) return

  editOptionFormSettings.type = action
  editOptionFormSettings.show = true
  editOptionFormSettings.coords = {
    x: event.pageX,
    y: event.pageY,
  }
  editOptionFormSettings.node = { ...node }

  if (action === 'edit' || action === 'delete') {
    const name = node.option.name
    editOptionFormSettings.name = { ...name }
  } else if (action === 'add') {
    editOptionFormSettings.name = { ru: '', en: '', ua: '' }
    editOptionFormSettings.node.option = {
      id: editOptionFormSettings?.node?.option?.id ?? 0,
    }
  }
}
