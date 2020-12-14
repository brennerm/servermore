import sanitizeHtml from 'sanitize-html';

interface SanitizeHtmlProps {
    html: string | null
}

export const SanitizeHtml = ({ html }: SanitizeHtmlProps) => {
    const clean = sanitizeHtml(html || "", {
        allowedTags: ['a'],
        allowedAttributes: {
            a: ['href', 'target']
        }
    });

    return (
        <div dangerouslySetInnerHTML={{ __html: clean }} />
    );
};