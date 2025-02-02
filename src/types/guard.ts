import { Paragraph } from "./api";

// Type guard pour Paragraph
export function isParagraph(item: Paragraph): item is Paragraph {
    return item?.type === "paragraph" && Array.isArray(item.children);
}

// Type guard pour List
//export function isList(item: any): item is List {
    //return item?.type === "list" && Array.isArray(item.children);
//}
