const LeafSVG = ({ className = "" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 120 200" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M60 10C60 10 20 60 20 120C20 160 40 190 60 190C80 190 100 160 100 120C100 60 60 10 60 10Z" stroke="currentColor" strokeWidth="1.5" fill="none" opacity="0.15" />
    <path d="M60 30V180" stroke="currentColor" strokeWidth="1" opacity="0.12" />
    <path d="M60 60C45 70 35 90 35 110" stroke="currentColor" strokeWidth="1" opacity="0.1" />
    <path d="M60 80C75 90 85 110 85 130" stroke="currentColor" strokeWidth="1" opacity="0.1" />
    <path d="M60 100C48 108 40 125 40 140" stroke="currentColor" strokeWidth="1" opacity="0.1" />
    <path d="M60 120C72 128 80 145 80 155" stroke="currentColor" strokeWidth="1" opacity="0.1" />
  </svg>
);

const BranchSVG = ({ className = "" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 200 100" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M10 50C40 50 60 30 80 30C100 30 110 50 130 50C150 50 170 35 190 35" stroke="currentColor" strokeWidth="1.2" opacity="0.12" />
    <circle cx="50" cy="38" r="8" stroke="currentColor" strokeWidth="1" opacity="0.08" />
    <circle cx="110" cy="42" r="6" stroke="currentColor" strokeWidth="1" opacity="0.08" />
    <circle cx="160" cy="38" r="7" stroke="currentColor" strokeWidth="1" opacity="0.08" />
    <path d="M70 30C68 20 72 12 78 10" stroke="currentColor" strokeWidth="0.8" opacity="0.1" />
    <path d="M140 50C138 60 142 68 148 70" stroke="currentColor" strokeWidth="0.8" opacity="0.1" />
  </svg>
);

const SmallLeaf = ({ className = "" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 60 80" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M30 5C30 5 10 25 10 50C10 65 20 75 30 75C40 75 50 65 50 50C50 25 30 5 30 5Z" stroke="currentColor" strokeWidth="1" fill="none" opacity="0.12" />
    <path d="M30 15V70" stroke="currentColor" strokeWidth="0.8" opacity="0.1" />
  </svg>
);

export const BotanicalTopLeft = () => (
  <div className="absolute top-0 left-0 text-foreground pointer-events-none">
    <LeafSVG className="w-20 md:w-28 -rotate-45 -translate-x-4 -translate-y-4" />
  </div>
);

export const BotanicalTopRight = () => (
  <div className="absolute top-0 right-0 text-foreground pointer-events-none">
    <LeafSVG className="w-16 md:w-24 rotate-45 translate-x-4 -translate-y-4" />
  </div>
);

export const BotanicalBottomLeft = () => (
  <div className="absolute bottom-0 left-0 text-foreground pointer-events-none">
    <SmallLeaf className="w-12 md:w-16 rotate-12 -translate-x-2 translate-y-2" />
  </div>
);

export const BotanicalBottomRight = () => (
  <div className="absolute bottom-0 right-0 text-foreground pointer-events-none">
    <SmallLeaf className="w-14 md:w-20 -rotate-12 translate-x-2 translate-y-2" />
  </div>
);

export const BotanicalDivider = () => (
  <div className="flex justify-center text-foreground pointer-events-none py-2">
    <BranchSVG className="w-48 md:w-64" />
  </div>
);

export { LeafSVG, BranchSVG, SmallLeaf };
