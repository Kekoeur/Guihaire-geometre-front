// PAGE

export interface PageData {
    Nom: string;
    Slug: string;
    Sections: Section[];
}

// SECTION 

export type Section = BasicSection | Carrousel | DisplayBtn | DisplayForm | DisplayFramedImage | DisplayGallery | FramedBetweenImage | HeadingSummaryAnimated | HeadingSummaryBasic | ImageBetweenFramed | SectionLocation | SectionWithFramedText | SideSummary | ImageDivider | LineDivider;

export interface BasicSection {
    __typename: string;
    Title: string;
    Content: TitleSummaryBasic[];
}

export interface Carrousel {
    __typename: string;
    Element: MediaImage[];
}

export interface DisplayBtn {
    __typename: string;
    Title: string;
    Button: TextBtn[];
}

export interface DisplayForm {
    __typename: string;
    Title: string;
    Text: Paragraph[];
    Form: Form;
}

export interface DisplayFramedImage {
    __typename: string;
    Title: string;
    Element: FramedImg[];
    FramedType: FramedType;
}

export interface DisplayGallery {
    __typename: string;
    Element: GalleryElt[];
}

export interface FramedBetweenImage {
    __typename: string;
    LeftImage: MediaImage;
    UniqueFramedText: FramedText;
    RightImage: MediaImage;
    FramedType: FramedType;
}

export interface HeadingSummaryAnimated {
    __typename: string;
    Title: string;
    Summary: TitleSummaryAnimated[];
    Button: TextBtn[];
    Image: MediaImage;
    AnimatedType: string;
}

export interface HeadingSummaryBasic {
    __typename: string;
    Title: string;
    Summary: TitleSummaryBasic[];
    Button: TextBtn[];
    Image: MediaImage;
    BasicType: string;
}

export interface ImageBetweenFramed {
    __typename: string;
    LeftFramed: FramedText;
    Image: MediaImage;
    RightFramed: FramedText;
    FramedType: FramedType;
}

export interface SectionLocation {
    __typename: string;
    Title: string;
    Plan: MediaImage;
    AdressTitle: string;
    Adress: string;
    RedirGPS: ImageBtn[];
    ScheduleTitle: string;
    Schedule: Paragraph[];
    LocationImg: MediaImage[];
}

export interface SectionWithFramedText {
    __typename: string;
    Title: string;
    MultipleFramedText: FramedText[];
    FramedType: FramedType;
}

export interface SideSummary {
    __typename: string;
    Title: string;
    Summary: TitleSummaryBasic[];
    SideImage: MediaImage;
    Type: string;
}

// TYPE

export interface Form {
    InputElt: InputFormElt[];
    FormButton: TextBtn[]
}

export interface FramedImg {
    Image: MediaImage;
    Text: string;
    RedirUrl: string;
}

export interface FramedText {
    Title: string;
    Text: Paragraph[];
}

export interface GalleryElt {
    Image: MediaImage;
    Size: number;
}

export interface ImageBtn {
    Image: MediaImage;
    RedirUrl: string;
}

export interface InputFormElt {
    Name: string;
    Placeholder: Placeholder;
    Size: number;
    Type: string;
    DataName: string;
}

export interface ListElements {
    Element: string;
}

export interface Placeholder {
    Icon: MediaImage;
    Text: string;
}

export interface TextBtn {
    Text: string;
    RedirUrl: string;
}

export interface TitleSummaryAnimated {
    AnimatedTitle: TypeAnimation;
    Summary: Paragraph[];
}

export interface TitleSummaryBasic {
    Title: string;
    Summary: Paragraph[];
}

export interface FramedType {
    Type: string;
}

// DIVIDER 

export interface ImageDivider {
    __typename: string;
    Image: MediaImage;
}

export interface LineDivider {
    __typename: string;
    LineColor: string;
}

// ANIMATION

export interface TypeAnimation {
    TextBefore: string;
    TypingElt: ListElements[];
    TextAfter: string;
    DelayAnimation: number;
}

// MEDIA

export interface MediaImage {
    ImgTitle: string;
    Image: FormatImage;
    ImgAlt: string;
}

// COMMON FORMAT

export interface FormatImage {
    url: string;
    previewUrl: string;
    formats: {large: ExtraFormat, medium: ExtraFormat, small: ExtraFormat, thumbnail: ExtraFormat};
    height: number;
    width: number;
    name: string;
    size: number;
}

export interface ExtraFormat {
    ext: string;
    hash: string;
    heigth: number;
    mime: string;
    name: string;
    path: string;
    size: number;
    sizeInBytes: number;
    url: string;
    width: number;
}

export interface Paragraph {
    type: string;
    children: TextChild[];
}

export interface TextChild {
    text: string;
    type: string;
}

export interface StrapiResponse {
    data: PageData;
    meta: Record<string, unknown>;
}

