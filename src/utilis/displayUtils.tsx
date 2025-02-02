import { Paragraph, TextChild } from '@/types/api';
import { isParagraph } from '@/types/guard';

/**
 * Récupère et concatène tout le texte des Paragraph[]
 * @param summary - Liste d'objets de type Paragraph
 * @returns Texte combiné
 */
export function renderParagraphText(paragraph: Paragraph[]): string {
    return paragraph
        .filter(isParagraph) // Vérifie que chaque élément est bien un Paragraph
        .map((paragraph) =>
            paragraph.children
                .map((child: TextChild) => child.text) // Récupère le texte de chaque enfant
                .join('') // Concatène les textes de chaque enfant
        )
        .join(' '); // Concatène les paragraphes avec un espace
}
