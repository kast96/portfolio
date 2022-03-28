import { useEffect } from "react";

//@ts-ignore
import { Fancybox as NativeFancybox } from "@fancyapps/ui/dist/fancybox.esm.js";
import "@fancyapps/ui/dist/fancybox.css";

type PropsType = {
    delegate?: string
    options?: any
    children: JSX.Element
}

export const Fancybox: React.FC<PropsType> = ({delegate, options, children}) => {
    delegate = delegate || "[data-fancybox]";

    useEffect(() => {
        const opts = options || {};

        NativeFancybox.bind(delegate, opts);

        return () => {
        NativeFancybox.destroy();
        };
    }, []);

  return <>{children}</>;
}