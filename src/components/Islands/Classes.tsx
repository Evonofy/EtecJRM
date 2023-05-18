import { Class, Day, days, Shift, shifts } from "@/classes.data"
import { createSignal, For, JSX } from "solid-js"

function DropdownButton(props: {
  selected: boolean
  onSelect: () => void
  children: JSX.Element
}) {
  return (
    <button
      onClick={props.onSelect}
      class={`w-full ${
        props.selected ? "bg-orange-200" : "bg-orange-50 hover:bg-orange-100"
      } p-3 transition-colors`}
    >
      {props.children}
    </button>
  )
}

function Details(props: {
  title: string
  children: (props: { close: () => void }) => JSX.Element
}) {
  let ref: HTMLDetailsElement

  return (
    <details ref={ref!} class="w-full rounded" style="overflow: overlay;">
      <summary class="flex w-full cursor-pointer items-center justify-between bg-orange-100 p-3">
        <p class="text-accent-darkest">{props.title}</p>

        <svg
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M2.5 0C1.83696 0 1.20107 0.263392 0.732233 0.732233C0.263392 1.20107 0 1.83696 0 2.5L0 17.5C0 18.163 0.263392 18.7989 0.732233 19.2678C1.20107 19.7366 1.83696 20 2.5 20H17.5C18.163 20 18.7989 19.7366 19.2678 19.2678C19.7366 18.7989 20 18.163 20 17.5V2.5C20 1.83696 19.7366 1.20107 19.2678 0.732233C18.7989 0.263392 18.163 0 17.5 0L2.5 0ZM10.625 5.625V12.8663L13.3075 10.1825C13.3656 10.1244 13.4346 10.0783 13.5105 10.0468C13.5864 10.0154 13.6678 9.99921 13.75 9.99921C13.8322 9.99921 13.9136 10.0154 13.9895 10.0468C14.0654 10.0783 14.1344 10.1244 14.1925 10.1825C14.2506 10.2406 14.2967 10.3096 14.3282 10.3855C14.3596 10.4614 14.3758 10.5428 14.3758 10.625C14.3758 10.7072 14.3596 10.7886 14.3282 10.8645C14.2967 10.9404 14.2506 11.0094 14.1925 11.0675L10.4425 14.8175C10.3844 14.8757 10.3155 14.9219 10.2395 14.9534C10.1636 14.9849 10.0822 15.0011 10 15.0011C9.91779 15.0011 9.83639 14.9849 9.76046 14.9534C9.68453 14.9219 9.61556 14.8757 9.5575 14.8175L5.8075 11.0675C5.74939 11.0094 5.70329 10.9404 5.67185 10.8645C5.6404 10.7886 5.62421 10.7072 5.62421 10.625C5.62421 10.5428 5.6404 10.4614 5.67185 10.3855C5.70329 10.3096 5.74939 10.2406 5.8075 10.1825C5.92486 10.0651 6.08403 9.99921 6.25 9.99921C6.33218 9.99921 6.41356 10.0154 6.48948 10.0468C6.5654 10.0783 6.63439 10.1244 6.6925 10.1825L9.375 12.8663V5.625C9.375 5.45924 9.44085 5.30027 9.55806 5.18306C9.67527 5.06585 9.83424 5 10 5C10.1658 5 10.3247 5.06585 10.4419 5.18306C10.5592 5.30027 10.625 5.45924 10.625 5.625Z"
            fill="#662B00"
          ></path>
        </svg>
      </summary>

      <div class="content flex flex-col">
        {props.children({ close: () => ref.removeAttribute("open") })}
      </div>
    </details>
  )
}

export const Classes = ({ classes }: { classes: Class[] }) => {
  const courses = [...new Set(classes.map((_class) => _class.group.course))]

  const [shift, setShift] = createSignal<Shift>(1)
  const [day, setDay] = createSignal<Day>(1)
  const [grade, setGrade] = createSignal<1 | 2 | 3>(1)
  const [course, setCourse] = createSignal<string>(courses[0]!)

  const filteredClasses = () => {
    let _classes = classes

    _classes = _classes.filter((_class) => _class.shift === shift())
    _classes = _classes.filter((_class) => _class.day === day())
    _classes = _classes.filter((_class) => _class.group.grade === grade())

    if (course.length > 0) {
      _classes = _classes.filter((_class) => _class.group.course === course())
    }

    return _classes
  }

  return (
    <section class="w-full bg-slate-50 p-6 lg:py-12">
      <div class="m-auto flex max-w-5xl flex-col items-start gap-8 lg:gap-16">
        <h2 class="text-accent-darkest">Horário Das Aulas</h2>

        <div class="flex w-full flex-col gap-3 lg:flex-row">
          <Details title={shifts[shift()].label}>
            {({ close }) => (
              <>
                <DropdownButton
                  selected={shift() === 1}
                  onSelect={() => {
                    setShift(1)
                    close()
                  }}
                >
                  Manhã
                </DropdownButton>

                <DropdownButton
                  selected={shift() === 2}
                  onSelect={() => {
                    setShift(2)
                    close()
                  }}
                >
                  Tarde
                </DropdownButton>
              </>
            )}
          </Details>

          <Details title={`${grade()}° Série`}>
            {({ close }) => (
              <>
                <DropdownButton
                  selected={grade() === 1}
                  onSelect={() => {
                    setGrade(1)
                    close()
                  }}
                >
                  1° Série
                </DropdownButton>

                <DropdownButton
                  selected={grade() === 2}
                  onSelect={() => {
                    setGrade(2)
                    close()
                  }}
                >
                  2° Série
                </DropdownButton>

                <DropdownButton
                  selected={grade() === 3}
                  onSelect={() => {
                    setGrade(3)
                    close()
                  }}
                >
                  3° Série
                </DropdownButton>
              </>
            )}
          </Details>

          <Details title={course()}>
            {({ close }) => (
              <For each={courses} fallback="Carregando cursos...">
                {(_course) => (
                  <DropdownButton
                    selected={course() === _course}
                    onSelect={() => {
                      setCourse(_course)
                      close()
                    }}
                  >
                    {_course}
                  </DropdownButton>
                )}
              </For>
            )}
          </Details>

          <Details title={days[day()]}>
            {({ close }) => (
              <For each={Object.entries(days)} fallback="Carregando cursos...">
                {([dayIndex, dayLabel]) => (
                  <DropdownButton
                    selected={day() === Number(dayIndex)}
                    onSelect={() => {
                      setDay(Number(dayIndex) as any)
                      close()
                    }}
                  >
                    {dayLabel}
                  </DropdownButton>
                )}
              </For>
            )}
          </Details>
        </div>

        <div class="flex w-full flex-col gap-2.5 rounded bg-orange-100 px-3 py-6 lg:m-auto lg:w-[640px]">
          <ul class="flex flex-col gap-1">
            <For each={filteredClasses()} fallback="loading...">
              {(_class) => (
                <li class="flex w-full flex-row items-center gap-3 px-3 odd:bg-slate-50 even:bg-transparent">
                  <div class="w-full">
                    <p
                      class={`${
                        _class.period === 4
                          ? "text-accent-darkest"
                          : "text-accent-dark"
                      }`}
                    >
                      {shifts[_class.shift].periods[_class.period]}
                    </p>
                  </div>

                  <div class="flex w-full flex-col">
                    <p
                      class={`font-bold ${
                        _class.period === 4
                          ? "text-accent-darkest"
                          : "text-accent-dark"
                      }`}
                    >
                      {_class.period === 4 ? (
                        <>Cantina</>
                      ) : (
                        <>
                          {_class.subject} - {_class.classroom}
                        </>
                      )}
                    </p>

                    <p
                      class={`${
                        _class.period === 4
                          ? "text-accent-darkest"
                          : "text-accent-dark"
                      }`}
                    >
                      {_class.period === 4 ? "Intervalo" : _class.teacher}
                    </p>
                  </div>
                </li>
              )}
            </For>
          </ul>
        </div>
      </div>
    </section>
  )
}
