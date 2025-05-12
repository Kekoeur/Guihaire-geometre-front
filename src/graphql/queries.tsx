import { gql } from "@apollo/client";

export const GET_PAGE_DATA = gql`
    query GetPageDate($documentId: ID!) {
        page(documentId: $documentId) {
            Nom
            Sections {
                __typename
                ... on ComponentHeadingSummaryAnimated {
                    Title
                    Summary {
                        AnimatedTitle : Title {
                            TextBefore
                            TypingElt {
                                Element
                                }
                            TextAfter
                            DelayAnimation
                        }
                        Summary
                    }
                    Button {
                        Text
                        RedirUrl
                        Type
                    }
                    Image {
                        ImgTitle
                        Image {
                            url
                            previewUrl
                            formats
                            height
                            width
                            name
                            size
                        }
                        ImgAlt
                    }
                    AnimatedType : Type
                }
                ... on ComponentHeadingSummaryBasic {
                    Title
                    Summary {
                        BasicTitle:Title
                        Summary
                    }
                    Button {
                        Text
                        RedirUrl
                        Type
                    }
                    Image {
                        ImgTitle
                        Image {
                            url
                            previewUrl
                            formats
                            height
                            width
                            name
                            size
                        }
                        ImgAlt
                    }
                    BasicType : Type
                }
                ... on ComponentSectionBasicSection {
                    Title
                    Content {
                        Title
                        Summary
                    }
                }
                ... on ComponentSectionCarrousel {
                    Element {
                        ImgTitle
                        Image {
                            url
                            previewUrl
                            formats
                            height
                            width
                            name
                            size
                        }
                        ImgAlt
                    }
                }
                ... on ComponentSectionDisplayBtn {
                    Title
                    Button {
                        Text
                        RedirUrl
                        Type
                    }
                }
                ... on ComponentSectionDisplayForm {
                    Title
                    Text
                    Form {
                        InputElt {
                            Name
                            Placeholder {
                                Icon {
                                    ImgTitle
                                    Image {
                                        url
                                        previewUrl
                                        formats
                                        height
                                        width
                                        name
                                        size
                                    }
                                    ImgAlt
                                }
                                Text
                            }
                            Size
                            Type
                            DataName
                        }
                        FormButton {
                            Text
                            RedirUrl
                            Type
                        }
                    }
                }
                ... on ComponentSectionDisplayFramedImage {
                    Title
                    Element {
                        Image {
                            ImgTitle
                            Image {
                                url
                                previewUrl
                                formats
                                height
                                width
                                name
                                size
                            }
                            ImgAlt
                        }
                        Text
                        RedirUrl
                    }
                    FramedType {
                        Type
                    }
                }
                ... on ComponentSectionDisplayGallery {
                    Element {
                        Image {
                            ImgTitle
                            Image {
                                url
                                previewUrl
                                formats
                                height
                                width
                                name
                                size
                            }
                            ImgAlt
                        }
                        Size
                    }
                }
                ... on ComponentSectionFramedBetweenImage {
                    LeftImage {
                        ImgTitle
                        Image {
                            url
                            previewUrl
                            formats
                            height
                            width
                            name
                            size
                        }
                        ImgAlt
                    }
                    UniqueFramedText: FramedText {
                        Title
                        Text
                    }
                    RightImage {
                        ImgTitle
                        Image {
                            url
                            previewUrl
                            formats
                            height
                            width
                            name
                            size
                        }
                        ImgAlt
                    }
                    FramedType {
                        Type
                    }
                }
                ... on ComponentSectionImageBetweenFramed {
                    LeftFramed {
                        Title
                        Text
                    }
                    Image {
                        ImgTitle
                        Image {
                            url
                            previewUrl
                            formats
                            height
                            width
                            name
                            size
                        }
                        ImgAlt
                    }
                    RightFramed {
                        Title
                        Text
                    }
                    FramedType {
                        Type
                    }
                }
                ... on ComponentSectionSectionLocation {
                    Title
                    Plan {
                        ImgTitle
                        Image {
                            url
                            previewUrl
                            formats
                            height
                            width
                            name
                            size
                        }
                        ImgAlt
                    }
                    AddressTitle
                    Address
                    RedirGPS {
                        Image {
                            ImgTitle
                            Image {
                                url
                                previewUrl
                                formats
                                height
                                width
                                name
                                size
                            }
                            ImgAlt
                        }
                        RedirUrl
                    }
                    ScheduleTitle
                    Schedule
                    LocationImg {
                        ImgTitle
                        Image {
                            url
                            previewUrl
                            formats
                            height
                            width
                            name
                            size
                        }
                        ImgAlt
                    }
                }
                ... on ComponentSectionSideSummary {
                    Title
                    Summary {
                        Title
                        Summary
                    }
                    SideImage {
                        ImgTitle
                        Image {
                            url
                            previewUrl
                            formats
                            height
                            width
                            name
                            size
                        }
                        ImgAlt
                    }
                    SideSummaryType : Type
                }
                ... on ComponentSectionSectionWithFramedText {
                    Title
                    MultipleFramedText: FramedText {
                        Title
                        Text
                    }
                    FramedType {
                        Type
                    }
                }
                ... on ComponentDividerImageDivider {
                    Image {
                        ImgTitle
                        Image {
                            url
                            previewUrl
                            formats
                            height
                            width
                            name
                            size
                        }
                        ImgAlt
                    }
                }
                ... on ComponentDividerLineDivider {
                    LineColor
                }
            }
        }
    }
`;

export const GET_NAVIGATION = gql`
    query getNavigation($navigationIdOrSlug: String!) {
        renderNavigation(navigationIdOrSlug: $navigationIdOrSlug) {
            title
            path
            menuAttached
            related {
                __typename
                ... on Page {
                documentId
                }
            }
            parent {
                title
                path
                parent {
                    title
                    path
                }
            }
        }
    }
`;

export const GET_CURRENT_NAV_PAGE = gql`
query getNavigation($navigationIdOrSlug: String!, $uiRouterKey: String) {
    renderNavigation(navigationIdOrSlug: $navigationIdOrSlug, uiRouterKey: $uiRouterKey) {
        related {
        __typename
        ... on Page {
            documentId
        }
        }
    }
}

`;

export const GET_PAGE_DATA_SLUG = gql`
    query GetPageDate($slug: String!) {
        pages(filters: { Slug: { eq: $slug } }) {
            Nom
            Slug
            Sections {
                __typename
                ... on ComponentHeadingSummaryAnimated {
                    Title
                    Summary {
                        AnimatedTitle : Title {
                            TextBefore
                            TypingElt {
                                Element
                                }
                            TextAfter
                            DelayAnimation
                        }
                        Summary
                    }
                    Button {
                        Text
                        RedirUrl
                    }
                    Image {
                        ImgTitle
                        Image {
                            url
                            previewUrl
                            formats
                            height
                            width
                            name
                            size
                        }
                        ImgAlt
                    }
                    AnimatedType : Type
                }
                ... on ComponentHeadingSummaryBasic {
                    Title
                    Summary {
                        BasicTitle:Title
                        Summary
                    }
                    Button {
                        Text
                        RedirUrl
                    }
                    Image {
                        ImgTitle
                        Image {
                            url
                            previewUrl
                            formats
                            height
                            width
                            name
                            size
                        }
                        ImgAlt
                    }
                    BasicType : Type
                }
                ... on ComponentSectionBasicSection {
                    Title
                    Content {
                        Title
                        Summary
                    }
                }
                ... on ComponentSectionCarrousel {
                    Element {
                        ImgTitle
                        Image {
                            url
                            previewUrl
                            formats
                            height
                            width
                            name
                            size
                        }
                        ImgAlt
                    }
                }
                ... on ComponentSectionDisplayBtn {
                    Title
                    Button {
                        Text
                        RedirUrl
                    }
                }
                ... on ComponentSectionDisplayForm {
                    Title
                    Text
                    Form {
                        InputElt {
                            Name
                            Placeholder {
                                Icon {
                                    ImgTitle
                                    Image {
                                        url
                                        previewUrl
                                        formats
                                        height
                                        width
                                        name
                                        size
                                    }
                                    ImgAlt
                                }
                                Text
                            }
                            Size
                            Type
                            DataName
                        }
                        FormButton {
                            Text
                            RedirUrl
                        }
                    }
                }
                ... on ComponentSectionDisplayFramedImage {
                    Title
                    Element {
                        Image {
                            ImgTitle
                            Image {
                                url
                                previewUrl
                                formats
                                height
                                width
                                name
                                size
                            }
                            ImgAlt
                        }
                        Text
                        RedirUrl
                    }
                    FramedType {
                        Type
                    }
                }
                ... on ComponentSectionDisplayGallery {
                    Element {
                        Image {
                            ImgTitle
                            Image {
                                url
                                previewUrl
                                formats
                                height
                                width
                                name
                                size
                            }
                            ImgAlt
                        }
                        Size
                    }
                }
                ... on ComponentSectionFramedBetweenImage {
                    LeftImage {
                        ImgTitle
                        Image {
                            url
                            previewUrl
                            formats
                            height
                            width
                            name
                            size
                        }
                        ImgAlt
                    }
                    UniqueFramedText: FramedText {
                        Title
                        Text
                    }
                    RightImage {
                        ImgTitle
                        Image {
                            url
                            previewUrl
                            formats
                            height
                            width
                            name
                            size
                        }
                        ImgAlt
                    }
                    FramedType {
                        Type
                    }
                }
                ... on ComponentSectionImageBetweenFramed {
                    LeftFramed {
                        Title
                        Text
                    }
                    Image {
                        ImgTitle
                        Image {
                            url
                            previewUrl
                            formats
                            height
                            width
                            name
                            size
                        }
                        ImgAlt
                    }
                    RightFramed {
                        Title
                        Text
                    }
                    FramedType {
                        Type
                    }
                }
                ... on ComponentSectionSectionLocation {
                    Title
                    Plan {
                        ImgTitle
                        Image {
                            url
                            previewUrl
                            formats
                            height
                            width
                            name
                            size
                        }
                        ImgAlt
                    }
                    AddressTitle
                    Address
                    RedirGPS {
                        Image {
                            ImgTitle
                            Image {
                                url
                                previewUrl
                                formats
                                height
                                width
                                name
                                size
                            }
                            ImgAlt
                        }
                        RedirUrl
                    }
                    ScheduleTitle
                    Schedule
                    LocationImg {
                        ImgTitle
                        Image {
                            url
                            previewUrl
                            formats
                            height
                            width
                            name
                            size
                        }
                        ImgAlt
                    }
                }
                ... on ComponentSectionSideSummary {
                    Title
                    Summary {
                        Title
                        Summary
                    }
                    SideImage {
                        ImgTitle
                        Image {
                            url
                            previewUrl
                            formats
                            height
                            width
                            name
                            size
                        }
                        ImgAlt
                    }
                    SideSummaryType : Type
                }
                ... on ComponentSectionSectionWithFramedText {
                    Title
                    MultipleFramedText: FramedText {
                        Title
                        Text
                    }
                    FramedType {
                        Type
                    }
                }
                ... on ComponentDividerImageDivider {
                    Image {
                        ImgTitle
                        Image {
                            url
                            previewUrl
                            formats
                            height
                            width
                            name
                            size
                        }
                        ImgAlt
                    }
                }
                ... on ComponentDividerLineDivider {
                    LineColor
                }
            }
        }
    }
`;

export const GET_COLOR_DATA = gql`
query getColor {
    couleur {
        FondPrincipal {
            ... on ComponentCouleurLinearGradient {
                GradientColor : GradientCouleur {
                    Hexa : Couleur
                    Percent : Pourcent
                }
                DegreAngle
                Type
            }
            ... on ComponentCouleurCouleur {
                Hexa : CouleurBasic
            }
            ... on ComponentCouleurCouleurPourcent {
                Hexa : Couleur
                Percent : Pourcent
            }
        }
        ComplementairePrincipal {
            ... on ComponentCouleurLinearGradient {
                GradientColor : GradientCouleur {
                    Hexa : Couleur
                    Percent : Pourcent
                }
                DegreAngle
                Type
            }
            ... on ComponentCouleurCouleur {
                Hexa : CouleurBasic
            }
            ... on ComponentCouleurCouleurPourcent {
                Hexa : Couleur
                Percent : Pourcent
            }
        }
        FondPrincipalOpaque {
            ... on ComponentCouleurLinearGradient {
                GradientColor : GradientCouleur {
                    Hexa : Couleur
                    Percent : Pourcent
                }
                DegreAngle
                Type
            }
            ... on ComponentCouleurCouleur {
                Hexa : CouleurBasic
            }
            ... on ComponentCouleurCouleurPourcent {
                Hexa : Couleur
                Percent : Pourcent
            }
        }
        TextePrincipal {
            ... on ComponentCouleurLinearGradient {
                GradientColor : GradientCouleur {
                    Hexa : Couleur
                    Percent : Pourcent
                }
                DegreAngle
                Type
            }
            ... on ComponentCouleurCouleur {
                Hexa : CouleurBasic
            }
            ... on ComponentCouleurCouleurPourcent {
                Hexa : Couleur
                Percent : Pourcent
            }
        }
        TextePrincipalOpaque {
            ... on ComponentCouleurLinearGradient {
                GradientColor : GradientCouleur {
                    Hexa : Couleur
                    Percent : Pourcent
                }
                DegreAngle
                Type
            }
            ... on ComponentCouleurCouleur {
                Hexa : CouleurBasic
            }
            ... on ComponentCouleurCouleurPourcent {
                Hexa : Couleur
                Percent : Pourcent
            }
        }
        FondSecondaire {
            ... on ComponentCouleurLinearGradient {
                GradientColor : GradientCouleur {
                    Hexa : Couleur
                    Percent : Pourcent
                }
                DegreAngle
                Type
            }
            ... on ComponentCouleurCouleur {
                Hexa : CouleurBasic
            }
            ... on ComponentCouleurCouleurPourcent {
                Hexa : Couleur
                Percent : Pourcent
            }
        }
        ComplementaireSecondaire {
            ... on ComponentCouleurLinearGradient {
                GradientColor : GradientCouleur {
                    Hexa : Couleur
                    Percent : Pourcent
                }
                DegreAngle
                Type
            }
            ... on ComponentCouleurCouleur {
                Hexa : CouleurBasic
            }
            ... on ComponentCouleurCouleurPourcent {
                Hexa : Couleur
                Percent : Pourcent
            }
        }
        FondSecondaireOpaque {
            ... on ComponentCouleurLinearGradient {
                GradientColor : GradientCouleur {
                    Hexa : Couleur
                    Percent : Pourcent
                }
                DegreAngle
                Type
            }
            ... on ComponentCouleurCouleur {
                Hexa : CouleurBasic
            }
            ... on ComponentCouleurCouleurPourcent {
                Hexa : Couleur
                Percent : Pourcent
            }
        }
        TexteSecondaire {
            ... on ComponentCouleurLinearGradient {
                GradientColor : GradientCouleur {
                    Hexa : Couleur
                    Percent : Pourcent
                }
                DegreAngle
                Type
            }
            ... on ComponentCouleurCouleur {
                Hexa : CouleurBasic
            }
            ... on ComponentCouleurCouleurPourcent {
                Hexa : Couleur
                Percent : Pourcent
            }
        }
        TexteSecondaireOpaque {
            ... on ComponentCouleurLinearGradient {
                GradientColor : GradientCouleur {
                    Hexa : Couleur
                    Percent : Pourcent
                }
                DegreAngle
                Type
            }
            ... on ComponentCouleurCouleur {
                Hexa : CouleurBasic
            }
            ... on ComponentCouleurCouleurPourcent {
                Hexa : Couleur
                Percent : Pourcent
            }
        }
        Alternative {
            ... on ComponentCouleurLinearGradient {
                GradientColor : GradientCouleur {
                    Hexa : Couleur
                    Percent : Pourcent
                }
                DegreAngle
                Type
            }
            ... on ComponentCouleurCouleur {
                Hexa : CouleurBasic
            }
            ... on ComponentCouleurCouleurPourcent {
                Hexa : Couleur
                Percent : Pourcent
            }
        }
        GradientPrincipal {
            ... on ComponentCouleurLinearGradient {
                GradientColor : GradientCouleur {
                    Hexa : Couleur
                    Percent : Pourcent
                }
                DegreAngle
                Type
            }
            ... on ComponentCouleurCouleur {
                Hexa : CouleurBasic
            }
            ... on ComponentCouleurCouleurPourcent {
                Hexa : Couleur
                Percent : Pourcent
            }
        }
        GradientSecondaire {
            ... on ComponentCouleurLinearGradient {
                GradientColor : GradientCouleur {
                    Hexa : Couleur
                    Percent : Pourcent
                }
                DegreAngle
                Type
            }
            ... on ComponentCouleurCouleur {
                Hexa : CouleurBasic
            }
            ... on ComponentCouleurCouleurPourcent {
                Hexa : Couleur
                Percent : Pourcent
            }
        }
    }
}
`;