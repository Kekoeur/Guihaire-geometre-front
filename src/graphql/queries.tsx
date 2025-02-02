import { gql } from "@apollo/client";

export const GET_PAGE_DATA = gql`
    query GetPageDate($page: String!) {
        {eq: $page} {
            Name
            Slug
            Heading {
                __typename
                ... on ComponentSectionHeadingSummaryAnimated {
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
                ... on ComponentSectionHeadingSummaryBasic {
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
            }
            Section {
                __typename
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
                        ImgAlt
                        Image {
                            url
                        }
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
                DisplayFramedImageType : Type
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
                FramedText {
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
                AdressTitle
                Adress
                RedirGPS {
                    Image {
                    ImgTitle
                    ImgAlt
                    Image {
                        url
                    }
                    }
                    RedirUrl
                }
                ScheduleTitle
                Schedule
                OfficeImg {
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
                FramedText {
                    Title
                    Summary
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
        }
    }
    }
`;

    

  