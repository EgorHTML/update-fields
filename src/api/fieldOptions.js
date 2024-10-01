import HDE from '../plugin'
import makeRequest from '../utils/request.js'

export async function getOptions(fieldId, page = 1) {
  const data = await makeRequest(
    {
      url: `${window.location.origin}/api/v2/custom_fields/${fieldId}/options/?page=${page}`,
    },
    true
  )

  return data
}

export async function deleteOption(fieldId, optionId) {
  const data = (
    await HDE.request({
      auth: 'HDE',
      url: `${window.location.origin}/api/v2/custom_fields/${fieldId}/options/${optionId}`,
      method: 'DELETE',
      contentType: 'application/json',
    })
  ).data

  return data
}

export function getFieldName(field) {
  return field.name?.ru || field.name?.en || field.name?.ua || 'Нет названия'
}
