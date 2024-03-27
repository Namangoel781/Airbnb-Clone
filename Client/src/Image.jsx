export default function Image({src,...rest}) {
    src = src && src.includes('https://')
      ? src
      : 'https://airbnb-1i6s.onrender.com/uploads/'+src;
    return (
      <img {...rest} src={src} alt={''} />
    );
  }