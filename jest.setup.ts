const g: any = global
g.PropertiesService = {
  getUserProperties: () => {
    return { getProperty: () => {} }
  }
}
