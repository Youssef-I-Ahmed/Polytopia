const SectionHeader = ({ eyebrow, title, text, align = 'center', className = '', eyebrowClass = '', titleClass = '', textClass = '' }) => {
  const alignClass = align === 'left' ? 'text-left' : 'mx-auto text-center';

  return (
    <div className={`max-w-3xl ${alignClass} ${className}`}>
      {eyebrow && <p className={`eyebrow mb-4 text-sm ${eyebrowClass}`}>{eyebrow}</p>}
      <h2 className={`h2 ${titleClass}`}>{title}</h2>
      {text && <p className={`lead mt-5 ${textClass}`}>{text}</p>}
    </div>
  );
};

export default SectionHeader;
