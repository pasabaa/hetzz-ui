import DOMPurify from "isomorphic-dompurify";
import { cards } from "@/data/cards";
import CodeBlock from "./CodeBlock";
import { useState } from "react";
import { IoCodeSharp } from "react-icons/io5";

export const CardsRender = () => {

    const [currentItem, setCurrentItem] = useState(0);
    const [isExpanded, setIsExpanded] = useState(false);
    
    const handleCurrentItem = (i) => {
        setCurrentItem(i);
        setIsExpanded(!isExpanded);
    }

  return cards?.map((card, i) => {
    const sanitizedData = DOMPurify.sanitize(card?.code);

    return (
        <section key={i}>
            <div dangerouslySetInnerHTML={{ __html: sanitizedData }} />
            <button onClick={() => handleCurrentItem(i)} className="text-sm text-neutral-400 font-semibold flex items-center gap-1 mt-2">Show code <IoCodeSharp size={16}/></button>
            {
                currentItem === i && isExpanded && (
                    <CodeBlock code={card?.code} language={'javascript'} />
                )
            }
        </section>
        
    );
  });
};
