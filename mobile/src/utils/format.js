import Intl from 'intl';
import ptBR from 'intl/locale-data/jsonp/pt-BR';

export const { format: formartPrice } = new Intl.NumberFormat(ptBR, {
  style: 'currency',
  currency: 'BRL',
});
