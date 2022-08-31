export const GetPageQuery = 
`    
    query GetPage {
        pages {
            id
            title
            section_builder {
                id
                sections_id {
                    title
                    cod_section
                    content_builder {
                        id
                        components_id {
                        title
                        content
                        }
                    }
                }
            }
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