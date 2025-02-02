// PAGE

export interface PageData {
    Name: string;
    Heading: (HeadingSummaryAnimated | HeadingSummaryBasic);
    Section: (BasicSection | Carrousel | DisplayBtn | DisplayForm | DisplayFramedImage | DisplayGallery | FramedBetweenImage | HeadingSummaryAnimated | HeadingSummaryBasic | ImageBetweenFramed | SectionLocation | SectionWithFramedText | SideSummary | ImageDivider | LineDivider);
    Slug: string;
}

// SECTION 

export interface BasicSection {
    Title: string;
    Content: TitleSummaryBasic[];
}

export interface Carrousel {
    Element: MediaImage[];
}

export interface DisplayBtn {
    Title: string;
    Button: TextBtn[];
}

export interface DisplayForm {
    Title: string;
    Text: Paragraph[];
    Form: Form;
}

export interface DisplayFramedImage {
    Title: string;
    Element: FramedImg;
    Type: string;
}

export interface DisplayGallery {
    Element: MediaImage[];
}

export interface FramedBetweenImage {
    LeftImage: MediaImage;
    FramedText: FramedText;
    RightImage: MediaImage;
}

export interface HeadingSummaryAnimated {
    Title: string;
    Summary: TitleSummaryAnimated[];
    Button: TextBtn[];
    Image: MediaImage;
    Type: string;
}

export interface HeadingSummaryBasic {
    Title: string;
    Summary: TitleSummaryBasic[];
    Button: TextBtn[];
    Image: MediaImage;
    Type: string;
}

export interface ImageBetweenFramed {
    LeftFramed: FramedText;
    Image: MediaImage;
    RightFramed: FramedText;
}

export interface SectionLocation {
    Title: string;
    Plan: MediaImage;
    AdressTitle: string;
    Adress: string;
    RedirGPS: ImageBtn[];
    ScheduleTitle: string;
    Schedule: Paragraph[];
    OfficeImg: MediaImage[];
}

export interface SectionWithFramedText {
    Title: string;
    FramedText: TitleSummaryBasic[];
}

export interface SideSummary {
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
    Title: TypeAnimation;
    Summary: Paragraph[];
}

export interface TitleSummaryBasic {
    Title: string;
    Summary: Paragraph[];
}

// DIVIDER 

export interface ImageDivider {
    Image: MediaImage;
}

export interface LineDivider {
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

