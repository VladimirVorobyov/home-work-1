export default function montoToStr(num) {
  return num > 12 || num < 1
    ? null
    : 'январь,февраль,март,апрель,май,июнь,июль,август,сентябрь,октябрь,ноябрь,декабрь'.split(',')[
        num - 1
      ];
}