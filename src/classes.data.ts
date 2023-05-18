export const days = {
  1: "Segunda",
  2: "Terça",
  3: "Quarta",
  4: "Quinta",
  5: "Sexta",
} as const

export type Day = keyof typeof days

export const shifts = {
  1: {
    label: "Manhã",
    periods: {
      1: "07h10 às 08h00",
      2: "08h00 às 08h50",
      3: "08h50 às 09h40",
      4: "9h40 às 10h",
      5: "10h00 às 10h50",
      6: "10h50 às 11h40",
      7: "11h40 às 12h30",
    },
  },
  2: {
    label: "Tarde",
    periods: {
      1: "13h00 às 13h50",
      2: "13h50 às 14h40",
      3: "14h40 às 15h30",
      4: "15h30 às 15h50",
      5: "15h50 às 16h40",
      6: "16h40 às 17h30",
      7: "17h30 às 18h20",
    },
  },
} as const

export type Shift = keyof typeof shifts

type Group = {
  course: string
  grade: number
}

const DG_1: Group = {
  course: "DESIGN GRÁFICO",
  grade: 1,
}

export type Class = {
  day: Day
  period: 1 | 2 | 3 | 4 | 5 | 6 | 7
  shift: Shift

  classroom?: string
  subject: string
  teacher?: string

  group: Group
}

// @ts-ignore
export const classes: Class[] = [
  {
    period: 1,
    day: 1,
    shift: 1,
    subject: "PIF",
    classroom: "LAB 3",
    teacher: "LILIANA",
    group: DG_1,
  },
  {
    period: 2,
    day: 1,
    shift: 1,
    subject: "PIF",
    classroom: "LAB 3",
    teacher: "LILIANA",
    group: DG_1,
  },
  {
    period: 3,
    day: 1,
    shift: 1,
    subject: "ED FÍSICA",
    teacher: "LEANDRO",
    group: DG_1,
  },
  {
    period: 5,
    day: 1,
    shift: 1,
    subject: "ED FÍSICA",
    teacher: "LEANDRO",
    group: DG_1,
  },
  {
    period: 6,
    day: 1,
    shift: 1,
    subject: "ARTE",
    classroom: "SALA 4",
    teacher: "LILIANA",
    group: DG_1,
  },
  {
    period: 7,
    day: 1,
    shift: 1,
    subject: "ARTE",
    classroom: "SALA 4",
    teacher: "LILIANA",
    group: DG_1,
  },
  {
    period: 1,
    day: 2,
    shift: 1,
    subject: "INGLÊS",
    classroom: "SALA 5",
    teacher: "ANDERSON",
    group: DG_1,
  },
  {
    period: 2,
    day: 2,
    shift: 1,
    subject: "INGLÊS",
    classroom: "SALA 5",
    teacher: "ANDERSON",
    group: DG_1,
  },
  {
    period: 3,
    day: 2,
    shift: 1,
    subject: "GEO",
    classroom: "SALA 3",
    teacher: "FLAVIA",
    group: DG_1,
  },
  {
    period: 5,
    day: 2,
    shift: 1,
    subject: "GEO",
    classroom: "SALA 3",
    teacher: "FLAVIA",
    group: DG_1,
  },
  {
    period: 6,
    day: 2,
    shift: 1,
    subject: "BIO",
    classroom: "SALA 1",
    teacher: "LUCIENY",
    group: DG_1,
  },
  {
    period: 6,
    day: 2,
    shift: 1,
    subject: "BIO",
    classroom: "SALA 1",
    teacher: "LUCIENY",
    group: DG_1,
  },
  {
    day: 3,
    period: 1,
    shift: 1,
    subject: "HISTÓRIA",
    classroom: "SALA 5",
    teacher: "BRUNA",
    group: DG_1,
  },
  {
    day: 3,
    period: 2,
    shift: 1,
    subject: "HISTÓRIA",
    classroom: "SALA 5",
    teacher: "BRUNA",
    group: DG_1,
  },
  {
    day: 3,
    period: 3,
    shift: 1,
    subject: "FÍSICA",
    classroom: "SALA 1",
    teacher: "SULLIVAN",
    group: DG_1,
  },
  {
    day: 3,
    period: 5,
    shift: 1,
    subject: "PVPE",
    classroom: "LAB 1",
    teacher: "JULIANA",
    group: DG_1,
  },
  {
    day: 3,
    period: 6,
    shift: 1,
    subject: "PVPE",
    classroom: "LAB 1",
    teacher: "JULIANA",
    group: DG_1,
  },
  {
    day: 3,
    period: 7,
    shift: 1,
    subject: "PVPE",
    classroom: "LAB 1",
    teacher: "JULIANA",
    group: DG_1,
  },
  {
    day: 4,
    period: 1,
    shift: 1,
    subject: "AIDG I",
    classroom: "LAB 1",
    group: DG_1,
  },
  {
    day: 4,
    period: 2,
    shift: 1,
    subject: "AIDG I",
    classroom: "LAB 1",
    group: DG_1,
  },
  {
    day: 4,
    period: 3,
    shift: 1,
    subject: "AIDG I",
    classroom: "LAB 1",
    group: DG_1,
  },
  {
    day: 4,
    period: 5,
    shift: 1,
    subject: "PORT",
    classroom: "SALA 1",
    teacher: "FERNANDA RAGAZZI",
    group: DG_1,
  },
  {
    day: 4,
    period: 6,
    shift: 1,
    subject: "PORT",
    classroom: "SALA 1",
    teacher: "FERNANDA RAGAZZI",
    group: DG_1,
  },
  {
    day: 4,
    period: 7,
    shift: 1,
    subject: "PORT",
    classroom: "SALA 1",
    teacher: "FERNANDA RAGAZZI",
    group: DG_1,
  },
  {
    day: 5,
    period: 1,
    shift: 1,
    subject: "MAT",
    classroom: "SALA 2",
    teacher: "CELSO",
    group: DG_1,
  },
  {
    day: 5,
    period: 2,
    shift: 1,
    subject: "MAT",
    classroom: "SALA 2",
    teacher: "CELSO",
    group: DG_1,
  },
  {
    day: 5,
    period: 2,
    shift: 1,
    subject: "QUÍMICA",
    classroom: "SALA 1",
    teacher: "VINÍCIUS",
    group: DG_1,
  },
  {
    day: 5,
    period: 3,
    shift: 1,
    subject: "QUÍMICA",
    classroom: "SALA 1",
    teacher: "VINÍCIUS",
    group: DG_1,
  },
  {
    day: 5,
    period: 5,
    shift: 1,
    subject: "QUÍMICA",
    classroom: "SALA 1",
    teacher: "VINÍCIUS",
    group: DG_1,
  },
  {
    day: 5,
    period: 6,
    shift: 1,
    subject: "MAT",
    classroom: "SALA 2",
    teacher: "CELSO",
    group: DG_1,
  },
  {
    day: 5,
    period: 7,
    shift: 1,
    subject: "FÍSICA",
    classroom: "SALA 5",
    teacher: "SULLIVAN",
    group: DG_1,
  },
]
  .map((_class) => {
    if (_class.period === 3) {
      const breakClass: Class = {
        group: _class.group,
        // @ts-ignore
        day: _class.day,
        // @ts-ignore
        period: _class.period + 1,
        // @ts-ignore
        shift: _class.shift,
        subject: "Cantina",
        teacher: "Intervalo",
      }

      return [_class as Class, breakClass as Class]
    }

    return _class
  })
  .flat()
