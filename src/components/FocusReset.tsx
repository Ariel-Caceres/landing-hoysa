import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export function FocusReset() {
    const location = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);

        if (document.activeElement instanceof HTMLElement) {
            document.activeElement.blur();
        }

        window.getSelection()?.removeAllRanges();
    }, [location.pathname]);

    return null;
}