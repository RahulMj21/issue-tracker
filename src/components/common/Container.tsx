import cn from "@/utils/cn";
import { ComponentPropsWithoutRef } from "react";

const Container = ({
    children,
    className,
}: ComponentPropsWithoutRef<"div">) => {
    return (
        <div className={cn("w-[80rem] max-w-[90%] mx-auto", className)}>
            {children}
        </div>
    );
};

export default Container;
