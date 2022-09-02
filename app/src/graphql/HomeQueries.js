export const GetContentPageQuery = 
`    
    query GetPage {
        pages {
            id
            title
            custom_css
            url
            section_builder {
                id
                sections_id {
                    title
                    custom_css
                    content_builder {
                        id
                        components_id {
                        title
                        content
                        }
                    }
                }
            }
            template_builder {
                id
                key
                value
            }
        }
    }
`

export const GetContentFilterPageQuery = 
`    
    query GetFilterPage ($url: String!){
        pages (filter: { url: {_eq:$url} } ){
            id
            title
            custom_css
          	url
            section_builder {
                id
                sections_id {
                    title
                    custom_css
                    content_builder {
                        id
                        components_id {
                        title
                        content
                        }
                    }
                }
            }
            template_builder {
                id
                key
                value
            }
        }
    }
`

export const GetTemplatesQuery = 
`    
    query GetTemplates {
        templates {
            id
            value
            key
        }
    }
`

export const GetRoutesQuery = 
`    
    query GetRoutes {
        pages {
            id
            url
        }
    }
`

export const GetMenuQuery = 
`    
    query GetMenu{
        menus {
            id
            title
            menu_items    
        }
    }
`