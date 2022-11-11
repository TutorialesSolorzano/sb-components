import './mylabel.css';

export interface MyLabelProps {
  /**
   * Este es el mensaje de la etiqueta
   */
  label: string;
   /**
   * Este es el tamaño de la etiqueta
   */
  size: 'normal' | 'h1' | 'h2' | 'h3';
  /**
   * Si quiere todo capitalizado
   */
   allCaps: boolean;
   /**
   * Colores basicos del boton
   */
  color: 'primary'|'secondary'|'tertiary';

  /**
   * Color personalizado de la fuente
   */
   fontColor?: string;
}

export const MyLabel = ({
  allCaps=false,
  color='primary',
  fontColor,
  label = 'No Label',
  size = 'normal',
}: MyLabelProps) => {
  return (
    <span className={`label ${size} text-${color}`} style={{color:fontColor}}>
      {allCaps?label.toLocaleUpperCase():label}
    </span>
  )
}
