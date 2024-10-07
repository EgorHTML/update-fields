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
  const data = await makeRequest(
    {
      url: `${window.location.origin}/api/v2/custom_fields/${fieldId}/options/${optionId}`,
      method: 'DELETE',
    },
    true
  )

  return data
}

export async function updateOptions(fieldId, options) {
  const data = await makeRequest(
    {
      url: `${window.location.origin}/api/v2/custom_fields/${fieldId}/options/`,
      method: 'POST',
      body: {
        options,
      },
    },
    true
  )

  return data
}

export function getFieldName(field) {
  return field.name?.ru || field.name?.en || field.name?.ua || 'Нет названия'
}
