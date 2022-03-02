import { airtable } from './airtable'

export const fetchNavLinks = async (filterEnv) => {
  const { data } = await airtable.get('/NavParents', {
    params: {
      view: 'AppView',
      filterByFormula: filterEnv !== 'DEV' ? `{${filterEnv}}` : undefined,
    },
  })

  const promises = data.records.map(async ({ id, fields }) => {
    const { data: childData } = await airtable.get('/NavChildren', {
      params: {
        view: 'AppView',
        filterByFormula:
          filterEnv !== 'DEV'
            ? `AND({${filterEnv}}, ARRAYJOIN({parentId}) = '${id}')`
            : `ARRAYJOIN({parentId}) = '${id}'`,
      },
    })

    return {
      id,
      ...fields,
      children: childData.records.map(({ id, fields }) => ({
        id,
        ...fields,
      })),
    }
  })

  return await Promise.all(promises)
}

export const fetchFooterLinks = async (filterEnv) => {
  const { data } = await airtable.get('/Footer', {
    params: {
      view: 'AppView',
      filterByFormula: filterEnv !== 'DEV' ? `{${filterEnv}}` : undefined,
    },
  })

  return data.records.map(({ id, fields }) => ({
    id,
    ...fields,
  }))
}

export const fetchSocialLinks = async (filterEnv) => {
  const { data } = await airtable.get('/Social', {
    params: {
      view: 'AppView',
      filterByFormula: filterEnv !== 'DEV' ? `{${filterEnv}}` : undefined,
    },
  })

  return data.records.map(({ id, fields }) => ({
    id,
    ...fields,
  }))
}
