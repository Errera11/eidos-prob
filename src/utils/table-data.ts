export type FieldType = 'date' | 'status' | 'module' | 'session' | 'room' | 'group'

export interface ITableField {
  name: FieldType
  variant?: {
    type: 'chip'
    state: 'plan' | 'active' | 'done'
  }
  label: string
}

export type ITableData = ITableField[][]

export interface ITableHeader {
  name: FieldType
  label: string
  sortable: boolean
}

export const TableHeader: ITableHeader[] = [
  {
    name: 'date',
    label: 'Дата и время',
    sortable: true,
  },
  {
    name: 'status',
    label: 'Статус',
    sortable: false,
  },
  {
    name: 'module',
    label: 'Название учебного модуля',
    sortable: false,
  },
  {
    name: 'session',
    label: 'Тип сессии',
    sortable: false,
  },
  {
    name: 'room',
    label: 'Комната',
    sortable: false,
  },
  {
    name: 'group',
    label: 'Группа',
    sortable: false,
  },
]

export const TableData: ITableData = [
  [
    { name: 'date', label: '15.07.2023, 12:00 - 13:00' },
    {
      name: 'status',
      variant: {
        type: 'chip',
        state: 'plan',
      },
      label: 'Запланировано',
    },
    {
      name: 'module',
      label: 'Ультразвуковое исследование органов брюшной полости и забрюшинного пространства',
    },
    {
      name: 'session',
      label: 'Урок',
    },
    {
      name: 'room',
      label: 'Комната 5, Комната 6, Комната 7',
    },
    {
      name: 'group',
      label: 'ТП-31',
    },
  ],
  [
    { name: 'date', label: '15.07.2023, 13:00- 14:00' },
    {
      name: 'status',
      variant: {
        type: 'chip',
        state: 'plan',
      },
      label: 'Запланировано',
    },
    {
      name: 'module',
      label: 'Ультразвуковое абдоминальное исследование мочевого пузыря (для мужчин) и предстательной железы',
    },
    {
      name: 'session',
      label: 'Аккредитация',
    },
    {
      name: 'room',
      label: 'Комната 6',
    },
    {
      name: 'group',
      label: '420-11КС',
    },
  ],
  [
    { name: 'date', label: '14.07.2023, 12:00-13:00' },
    {
      name: 'status',
      variant: {
        type: 'chip',
        state: 'plan',
      },
      label: 'Запланировано',
    },
    {
      name: 'module',
      label: 'Реанимация новорожденных',
    },
    {
      name: 'session',
      label: 'Урок',
    },
    {
      name: 'room',
      label: 'Комната 1, Комната 2',
    },
    {
      name: 'group',
      label: '240011С',
    },
  ],
  [
    { name: 'date', label: '05.06.2023, 13:00-14:00' },
    {
      name: 'status',
      variant: {
        type: 'chip',
        state: 'active',
      },
      label: 'Идет',
    },
    {
      name: 'module',
      label: 'Акушерство и гинекология',
    },
    {
      name: 'session',
      label: 'Экзамен',
    },
    {
      name: 'room',
      label: 'Комната 6',
    },
    {
      name: 'group',
      label: 'ТП-31',
    },
  ],
  [
    { name: 'date', label: '05.06.2023, 12:00-13:00' },
    {
      name: 'status',
      variant: {
        type: 'chip',
        state: 'done',
      },
      label: 'Завершено',
    },
    {
      name: 'module',
      label: 'Ультразвуковое абдоминальное исследование мочевого пузыря (для мужчин) и предстательной железы',
    },
    {
      name: 'session',
      label: 'Аккредитация',
    },
    {
      name: 'room',
      label: 'Комната 6',
    },
    {
      name: 'group',
      label: 'КЛ-98',
    },
  ],
  [
    { name: 'date', label: '05.06.2023, 12:00-13:00' },
    {
      name: 'status',
      variant: {
        type: 'chip',
        state: 'done',
      },
      label: 'Завершено',
    },
    {
      name: 'module',
      label: 'Ультразвуковое абдоминальное исследование мочевого пузыря (для мужчин) и предстательной железы',
    },
    {
      name: 'session',
      label: 'Аккредитация',
    },
    {
      name: 'room',
      label: 'Комната 6',
    },
    {
      name: 'group',
      label: 'КЛ-98',
    },
  ],
  [
    { name: 'date', label: '05.06.2023, 11:00-12:00' },
    {
      name: 'status',
      variant: {
        type: 'chip',
        state: 'done',
      },
      label: 'Завершено',
    },
    {
      name: 'module',
      label: 'Ультразвуковое абдоминальное исследование мочевого пузыря (для мужчин) и предстательной железы',
    },
    {
      name: 'session',
      label: 'Аккредитация',
    },
    {
      name: 'room',
      label: 'Комната 6',
    },
    {
      name: 'group',
      label: 'КЛ-98',
    },
  ],
  [
    { name: 'date', label: '05.06.2023, 11:00-12:00' },
    {
      name: 'status',
      variant: {
        type: 'chip',
        state: 'done',
      },
      label: 'Завершено',
    },
    {
      name: 'module',
      label: 'Ультразвуковое абдоминальное исследование мочевого пузыря (для мужчин) и предстательной железы',
    },
    {
      name: 'session',
      label: 'Аккредитация',
    },
    {
      name: 'room',
      label: 'Комната 6',
    },
    {
      name: 'group',
      label: 'КЛ-98',
    },
  ],
  [
    { name: 'date', label: '05.06.2023, 11:00-12:00' },
    {
      name: 'status',
      variant: {
        type: 'chip',
        state: 'done',
      },
      label: 'Завершено',
    },
    {
      name: 'module',
      label: 'Ультразвуковое абдоминальное исследование мочевого пузыря (для мужчин) и предстательной железы',
    },
    {
      name: 'session',
      label: 'Аккредитация',
    },
    {
      name: 'room',
      label: 'Комната 6',
    },
    {
      name: 'group',
      label: 'КЛ-98',
    },
  ],
  [
    { name: 'date', label: '05.06.2023, 11:00-12:00' },
    {
      name: 'status',
      variant: {
        type: 'chip',
        state: 'done',
      },
      label: 'Завершено',
    },
    {
      name: 'module',
      label: 'Ультразвуковое абдоминальное исследование мочевого пузыря (для мужчин) и предстательной железы',
    },
    {
      name: 'session',
      label: 'Аккредитация',
    },
    {
      name: 'room',
      label: 'Комната 6',
    },
    {
      name: 'group',
      label: 'КЛ-98',
    },
  ],
  [
    { name: 'date', label: '05.06.2023, 11:00-12:00' },
    {
      name: 'status',
      variant: {
        type: 'chip',
        state: 'done',
      },
      label: 'Завершено',
    },
    {
      name: 'module',
      label: 'Ультразвуковое абдоминальное исследование мочевого пузыря (для мужчин) и предстательной железы',
    },
    {
      name: 'session',
      label: 'Аккредитация',
    },
    {
      name: 'room',
      label: 'Комната 6',
    },
    {
      name: 'group',
      label: 'КЛ-98',
    },
  ],
  [
    { name: 'date', label: '05.06.2023, 11:00-12:00' },
    {
      name: 'status',
      variant: {
        type: 'chip',
        state: 'done',
      },
      label: 'Завершено',
    },
    {
      name: 'module',
      label: 'Ультразвуковое абдоминальное исследование мочевого пузыря (для мужчин) и предстательной железы',
    },
    {
      name: 'session',
      label: 'Аккредитация',
    },
    {
      name: 'room',
      label: 'Комната 6',
    },
    {
      name: 'group',
      label: 'КЛ-98',
    },
  ],
  [
    { name: 'date', label: '15.07.2023, 12:00 - 13:00' },
    {
      name: 'status',
      variant: {
        type: 'chip',
        state: 'plan',
      },
      label: 'Запланировано1',
    },
    {
      name: 'module',
      label: 'Ультразвуковое исследование органов брюшной полости и забрюшинного пространства',
    },
    {
      name: 'session',
      label: 'Урок',
    },
    {
      name: 'room',
      label: 'Комната 5, Комната 6, Комната 7',
    },
    {
      name: 'group',
      label: 'ТП-31',
    },
  ],
  [
    { name: 'date', label: '15.07.2023, 13:00- 14:00' },
    {
      name: 'status',
      variant: {
        type: 'chip',
        state: 'plan',
      },
      label: 'Запланировано',
    },
    {
      name: 'module',
      label: 'Ультразвуковое абдоминальное исследование мочевого пузыря (для мужчин) и предстательной железы',
    },
    {
      name: 'session',
      label: 'Аккредитация',
    },
    {
      name: 'room',
      label: 'Комната 6',
    },
    {
      name: 'group',
      label: '420-11КС',
    },
  ],
  [
    { name: 'date', label: '14.07.2023, 12:00-13:00' },
    {
      name: 'status',
      variant: {
        type: 'chip',
        state: 'plan',
      },
      label: 'Запланировано',
    },
    {
      name: 'module',
      label: 'Реанимация новорожденных',
    },
    {
      name: 'session',
      label: 'Урок',
    },
    {
      name: 'room',
      label: 'Комната 1, Комната 2',
    },
    {
      name: 'group',
      label: '240011С',
    },
  ],
  [
    { name: 'date', label: '05.06.2023, 13:00-14:00' },
    {
      name: 'status',
      variant: {
        type: 'chip',
        state: 'active',
      },
      label: 'Идет',
    },
    {
      name: 'module',
      label: 'Акушерство и гинекология',
    },
    {
      name: 'session',
      label: 'Экзамен',
    },
    {
      name: 'room',
      label: 'Комната 6',
    },
    {
      name: 'group',
      label: 'ТП-31',
    },
  ],
  [
    { name: 'date', label: '05.06.2023, 12:00-13:00' },
    {
      name: 'status',
      variant: {
        type: 'chip',
        state: 'done',
      },
      label: 'Завершено',
    },
    {
      name: 'module',
      label: 'Ультразвуковое абдоминальное исследование мочевого пузыря (для мужчин) и предстательной железы',
    },
    {
      name: 'session',
      label: 'Аккредитация',
    },
    {
      name: 'room',
      label: 'Комната 6',
    },
    {
      name: 'group',
      label: 'КЛ-98',
    },
  ],
  [
    { name: 'date', label: '05.06.2023, 12:00-13:00' },
    {
      name: 'status',
      variant: {
        type: 'chip',
        state: 'done',
      },
      label: 'Завершено',
    },
    {
      name: 'module',
      label: 'Ультразвуковое абдоминальное исследование мочевого пузыря (для мужчин) и предстательной железы',
    },
    {
      name: 'session',
      label: 'Аккредитация',
    },
    {
      name: 'room',
      label: 'Комната 6',
    },
    {
      name: 'group',
      label: 'КЛ-98',
    },
  ],
  [
    { name: 'date', label: '05.06.2023, 11:00-12:00' },
    {
      name: 'status',
      variant: {
        type: 'chip',
        state: 'done',
      },
      label: 'Завершено',
    },
    {
      name: 'module',
      label: 'Ультразвуковое абдоминальное исследование мочевого пузыря (для мужчин) и предстательной железы',
    },
    {
      name: 'session',
      label: 'Аккредитация',
    },
    {
      name: 'room',
      label: 'Комната 6',
    },
    {
      name: 'group',
      label: 'КЛ-98',
    },
  ],
  [
    { name: 'date', label: '05.06.2023, 11:00-12:00' },
    {
      name: 'status',
      variant: {
        type: 'chip',
        state: 'done',
      },
      label: 'Завершено',
    },
    {
      name: 'module',
      label: 'Ультразвуковое абдоминальное исследование мочевого пузыря (для мужчин) и предстательной железы',
    },
    {
      name: 'session',
      label: 'Аккредитация',
    },
    {
      name: 'room',
      label: 'Комната 6',
    },
    {
      name: 'group',
      label: 'КЛ-98',
    },
  ],
  [
    { name: 'date', label: '05.06.2023, 11:00-12:00' },
    {
      name: 'status',
      variant: {
        type: 'chip',
        state: 'done',
      },
      label: 'Завершено',
    },
    {
      name: 'module',
      label: 'Ультразвуковое абдоминальное исследование мочевого пузыря (для мужчин) и предстательной железы',
    },
    {
      name: 'session',
      label: 'Аккредитация',
    },
    {
      name: 'room',
      label: 'Комната 6',
    },
    {
      name: 'group',
      label: 'КЛ-98',
    },
  ],
  [
    { name: 'date', label: '05.06.2023, 11:00-12:00' },
    {
      name: 'status',
      variant: {
        type: 'chip',
        state: 'done',
      },
      label: 'Завершено',
    },
    {
      name: 'module',
      label: 'Ультразвуковое абдоминальное исследование мочевого пузыря (для мужчин) и предстательной железы',
    },
    {
      name: 'session',
      label: 'Аккредитация',
    },
    {
      name: 'room',
      label: 'Комната 6',
    },
    {
      name: 'group',
      label: 'КЛ-98',
    },
  ],
  [
    { name: 'date', label: '05.06.2023, 11:00-12:00' },
    {
      name: 'status',
      variant: {
        type: 'chip',
        state: 'done',
      },
      label: 'Завершено',
    },
    {
      name: 'module',
      label: 'Ультразвуковое абдоминальное исследование мочевого пузыря (для мужчин) и предстательной железы',
    },
    {
      name: 'session',
      label: 'Аккредитация',
    },
    {
      name: 'room',
      label: 'Комната 6',
    },
    {
      name: 'group',
      label: 'КЛ-98',
    },
  ],
  [
    { name: 'date', label: '05.06.2023, 11:00-12:00' },
    {
      name: 'status',
      variant: {
        type: 'chip',
        state: 'done',
      },
      label: 'Завершено',
    },
    {
      name: 'module',
      label: 'Ультразвуковое абдоминальное исследование мочевого пузыря (для мужчин) и предстательной железы',
    },
    {
      name: 'session',
      label: 'Аккредитация',
    },
    {
      name: 'room',
      label: 'Комната 6',
    },
    {
      name: 'group',
      label: 'КЛ-98',
    },
  ],
  [
    { name: 'date', label: '15.07.2023, 12:00 - 13:00' },
    {
      name: 'status',
      variant: {
        type: 'chip',
        state: 'plan',
      },
      label: 'Запланировано1',
    },
    {
      name: 'module',
      label: 'Ультразвуковое исследование органов брюшной полости и забрюшинного пространства',
    },
    {
      name: 'session',
      label: 'Урок',
    },
    {
      name: 'room',
      label: 'Комната 5, Комната 6, Комната 7',
    },
    {
      name: 'group',
      label: 'ТП-31',
    },
  ],
  [
    { name: 'date', label: '15.07.2023, 13:00- 14:00' },
    {
      name: 'status',
      variant: {
        type: 'chip',
        state: 'plan',
      },
      label: 'Запланировано',
    },
    {
      name: 'module',
      label: 'Ультразвуковое абдоминальное исследование мочевого пузыря (для мужчин) и предстательной железы',
    },
    {
      name: 'session',
      label: 'Аккредитация',
    },
    {
      name: 'room',
      label: 'Комната 6',
    },
    {
      name: 'group',
      label: '420-11КС',
    },
  ],
  [
    { name: 'date', label: '14.07.2023, 12:00-13:00' },
    {
      name: 'status',
      variant: {
        type: 'chip',
        state: 'plan',
      },
      label: 'Запланировано',
    },
    {
      name: 'module',
      label: 'Реанимация новорожденных',
    },
    {
      name: 'session',
      label: 'Урок',
    },
    {
      name: 'room',
      label: 'Комната 1, Комната 2',
    },
    {
      name: 'group',
      label: '240011С',
    },
  ],
  [
    { name: 'date', label: '05.06.2023, 13:00-14:00' },
    {
      name: 'status',
      variant: {
        type: 'chip',
        state: 'active',
      },
      label: 'Идет',
    },
    {
      name: 'module',
      label: 'Акушерство и гинекология',
    },
    {
      name: 'session',
      label: 'Экзамен',
    },
    {
      name: 'room',
      label: 'Комната 6',
    },
    {
      name: 'group',
      label: 'ТП-31',
    },
  ],
  [
    { name: 'date', label: '05.06.2023, 12:00-13:00' },
    {
      name: 'status',
      variant: {
        type: 'chip',
        state: 'done',
      },
      label: 'Завершено',
    },
    {
      name: 'module',
      label: 'Ультразвуковое абдоминальное исследование мочевого пузыря (для мужчин) и предстательной железы',
    },
    {
      name: 'session',
      label: 'Аккредитация',
    },
    {
      name: 'room',
      label: 'Комната 6',
    },
    {
      name: 'group',
      label: 'КЛ-98',
    },
  ],
  [
    { name: 'date', label: '05.06.2023, 12:00-13:00' },
    {
      name: 'status',
      variant: {
        type: 'chip',
        state: 'done',
      },
      label: 'Завершено',
    },
    {
      name: 'module',
      label: 'Ультразвуковое абдоминальное исследование мочевого пузыря (для мужчин) и предстательной железы',
    },
    {
      name: 'session',
      label: 'Аккредитация',
    },
    {
      name: 'room',
      label: 'Комната 6',
    },
    {
      name: 'group',
      label: 'КЛ-98',
    },
  ],
  [
    { name: 'date', label: '05.06.2023, 11:00-12:00' },
    {
      name: 'status',
      variant: {
        type: 'chip',
        state: 'done',
      },
      label: 'Завершено',
    },
    {
      name: 'module',
      label: 'Ультразвуковое абдоминальное исследование мочевого пузыря (для мужчин) и предстательной железы',
    },
    {
      name: 'session',
      label: 'Аккредитация',
    },
    {
      name: 'room',
      label: 'Комната 6',
    },
    {
      name: 'group',
      label: 'КЛ-98',
    },
  ],
  [
    { name: 'date', label: '05.06.2023, 11:00-12:00' },
    {
      name: 'status',
      variant: {
        type: 'chip',
        state: 'done',
      },
      label: 'Завершено',
    },
    {
      name: 'module',
      label: 'Ультразвуковое абдоминальное исследование мочевого пузыря (для мужчин) и предстательной железы',
    },
    {
      name: 'session',
      label: 'Аккредитация',
    },
    {
      name: 'room',
      label: 'Комната 6',
    },
    {
      name: 'group',
      label: 'КЛ-98',
    },
  ],
  [
    { name: 'date', label: '05.06.2023, 11:00-12:00' },
    {
      name: 'status',
      variant: {
        type: 'chip',
        state: 'done',
      },
      label: 'Завершено',
    },
    {
      name: 'module',
      label: 'Ультразвуковое абдоминальное исследование мочевого пузыря (для мужчин) и предстательной железы',
    },
    {
      name: 'session',
      label: 'Аккредитация',
    },
    {
      name: 'room',
      label: 'Комната 6',
    },
    {
      name: 'group',
      label: 'КЛ-98',
    },
  ],
  [
    { name: 'date', label: '05.06.2023, 11:00-12:00' },
    {
      name: 'status',
      variant: {
        type: 'chip',
        state: 'done',
      },
      label: 'Завершено',
    },
    {
      name: 'module',
      label: 'Ультразвуковое абдоминальное исследование мочевого пузыря (для мужчин) и предстательной железы',
    },
    {
      name: 'session',
      label: 'Аккредитация',
    },
    {
      name: 'room',
      label: 'Комната 6',
    },
    {
      name: 'group',
      label: 'КЛ-98',
    },
  ],
  [
    { name: 'date', label: '05.06.2023, 11:00-12:00' },
    {
      name: 'status',
      variant: {
        type: 'chip',
        state: 'done',
      },
      label: 'Завершено',
    },
    {
      name: 'module',
      label: 'Ультразвуковое абдоминальное исследование мочевого пузыря (для мужчин) и предстательной железы',
    },
    {
      name: 'session',
      label: 'Аккредитация',
    },
    {
      name: 'room',
      label: 'Комната 6',
    },
    {
      name: 'group',
      label: 'КЛ-98',
    },
  ],
  [
    { name: 'date', label: '05.06.2023, 11:00-12:00' },
    {
      name: 'status',
      variant: {
        type: 'chip',
        state: 'done',
      },
      label: 'Завершено',
    },
    {
      name: 'module',
      label: 'Ультразвуковое абдоминальное исследование мочевого пузыря (для мужчин) и предстательной железы',
    },
    {
      name: 'session',
      label: 'Аккредитация',
    },
    {
      name: 'room',
      label: 'Комната 6',
    },
    {
      name: 'group',
      label: 'КЛ-98',
    },
  ],
  [
    { name: 'date', label: '15.07.2023, 12:00 - 13:00' },
    {
      name: 'status',
      variant: {
        type: 'chip',
        state: 'plan',
      },
      label: 'Запланировано1',
    },
    {
      name: 'module',
      label: 'Ультразвуковое исследование органов брюшной полости и забрюшинного пространства',
    },
    {
      name: 'session',
      label: 'Урок',
    },
    {
      name: 'room',
      label: 'Комната 5, Комната 6, Комната 7',
    },
    {
      name: 'group',
      label: 'ТП-31',
    },
  ],
  [
    { name: 'date', label: '15.07.2023, 13:00- 14:00' },
    {
      name: 'status',
      variant: {
        type: 'chip',
        state: 'plan',
      },
      label: 'Запланировано',
    },
    {
      name: 'module',
      label: 'Ультразвуковое абдоминальное исследование мочевого пузыря (для мужчин) и предстательной железы',
    },
    {
      name: 'session',
      label: 'Аккредитация',
    },
    {
      name: 'room',
      label: 'Комната 6',
    },
    {
      name: 'group',
      label: '420-11КС',
    },
  ],
  [
    { name: 'date', label: '14.07.2023, 12:00-13:00' },
    {
      name: 'status',
      variant: {
        type: 'chip',
        state: 'plan',
      },
      label: 'Запланировано',
    },
    {
      name: 'module',
      label: 'Реанимация новорожденных',
    },
    {
      name: 'session',
      label: 'Урок',
    },
    {
      name: 'room',
      label: 'Комната 1, Комната 2',
    },
    {
      name: 'group',
      label: '240011С',
    },
  ],
  [
    { name: 'date', label: '05.06.2023, 13:00-14:00' },
    {
      name: 'status',
      variant: {
        type: 'chip',
        state: 'active',
      },
      label: 'Идет',
    },
    {
      name: 'module',
      label: 'Акушерство и гинекология',
    },
    {
      name: 'session',
      label: 'Экзамен',
    },
    {
      name: 'room',
      label: 'Комната 6',
    },
    {
      name: 'group',
      label: 'ТП-31',
    },
  ],
  [
    { name: 'date', label: '05.06.2023, 12:00-13:00' },
    {
      name: 'status',
      variant: {
        type: 'chip',
        state: 'done',
      },
      label: 'Завершено',
    },
    {
      name: 'module',
      label: 'Ультразвуковое абдоминальное исследование мочевого пузыря (для мужчин) и предстательной железы',
    },
    {
      name: 'session',
      label: 'Аккредитация',
    },
    {
      name: 'room',
      label: 'Комната 6',
    },
    {
      name: 'group',
      label: 'КЛ-98',
    },
  ],
  [
    { name: 'date', label: '05.06.2023, 12:00-13:00' },
    {
      name: 'status',
      variant: {
        type: 'chip',
        state: 'done',
      },
      label: 'Завершено',
    },
    {
      name: 'module',
      label: 'Ультразвуковое абдоминальное исследование мочевого пузыря (для мужчин) и предстательной железы',
    },
    {
      name: 'session',
      label: 'Аккредитация',
    },
    {
      name: 'room',
      label: 'Комната 6',
    },
    {
      name: 'group',
      label: 'КЛ-98',
    },
  ],
  [
    { name: 'date', label: '05.06.2023, 11:00-12:00' },
    {
      name: 'status',
      variant: {
        type: 'chip',
        state: 'done',
      },
      label: 'Завершено',
    },
    {
      name: 'module',
      label: 'Ультразвуковое абдоминальное исследование мочевого пузыря (для мужчин) и предстательной железы',
    },
    {
      name: 'session',
      label: 'Аккредитация',
    },
    {
      name: 'room',
      label: 'Комната 6',
    },
    {
      name: 'group',
      label: 'КЛ-98',
    },
  ],
  [
    { name: 'date', label: '05.06.2023, 11:00-12:00' },
    {
      name: 'status',
      variant: {
        type: 'chip',
        state: 'done',
      },
      label: 'Завершено',
    },
    {
      name: 'module',
      label: 'Ультразвуковое абдоминальное исследование мочевого пузыря (для мужчин) и предстательной железы',
    },
    {
      name: 'session',
      label: 'Аккредитация',
    },
    {
      name: 'room',
      label: 'Комната 6',
    },
    {
      name: 'group',
      label: 'КЛ-98',
    },
  ],
  [
    { name: 'date', label: '05.06.2023, 11:00-12:00' },
    {
      name: 'status',
      variant: {
        type: 'chip',
        state: 'done',
      },
      label: 'Завершено',
    },
    {
      name: 'module',
      label: 'Ультразвуковое абдоминальное исследование мочевого пузыря (для мужчин) и предстательной железы',
    },
    {
      name: 'session',
      label: 'Аккредитация',
    },
    {
      name: 'room',
      label: 'Комната 6',
    },
    {
      name: 'group',
      label: 'КЛ-98',
    },
  ],
  [
    { name: 'date', label: '05.06.2023, 11:00-12:00' },
    {
      name: 'status',
      variant: {
        type: 'chip',
        state: 'done',
      },
      label: 'Завершено',
    },
    {
      name: 'module',
      label: 'Ультразвуковое абдоминальное исследование мочевого пузыря (для мужчин) и предстательной железы',
    },
    {
      name: 'session',
      label: 'Аккредитация',
    },
    {
      name: 'room',
      label: 'Комната 6',
    },
    {
      name: 'group',
      label: 'КЛ-98',
    },
  ],
  [
    { name: 'date', label: '05.06.2023, 11:00-12:00' },
    {
      name: 'status',
      variant: {
        type: 'chip',
        state: 'done',
      },
      label: 'Завершено',
    },
    {
      name: 'module',
      label: 'Ультразвуковое абдоминальное исследование мочевого пузыря (для мужчин) и предстательной железы',
    },
    {
      name: 'session',
      label: 'Аккредитация',
    },
    {
      name: 'room',
      label: 'Комната 6',
    },
    {
      name: 'group',
      label: 'КЛ-98',
    },
  ],
  [
    { name: 'date', label: '05.06.2023, 11:00-12:00' },
    {
      name: 'status',
      variant: {
        type: 'chip',
        state: 'done',
      },
      label: 'Завершено',
    },
    {
      name: 'module',
      label: 'Ультразвуковое абдоминальное исследование мочевого пузыря (для мужчин) и предстательной железы',
    },
    {
      name: 'session',
      label: 'Аккредитация',
    },
    {
      name: 'room',
      label: 'Комната 6',
    },
    {
      name: 'group',
      label: 'КЛ-98',
    },
  ],
  [
    { name: 'date', label: '15.07.2023, 12:00 - 13:00' },
    {
      name: 'status',
      variant: {
        type: 'chip',
        state: 'plan',
      },
      label: 'Запланировано1',
    },
    {
      name: 'module',
      label: 'Ультразвуковое исследование органов брюшной полости и забрюшинного пространства',
    },
    {
      name: 'session',
      label: 'Урок',
    },
    {
      name: 'room',
      label: 'Комната 5, Комната 6, Комната 7',
    },
    {
      name: 'group',
      label: 'ТП-31',
    },
  ],
  [
    { name: 'date', label: '15.07.2023, 13:00- 14:00' },
    {
      name: 'status',
      variant: {
        type: 'chip',
        state: 'plan',
      },
      label: 'Запланировано',
    },
    {
      name: 'module',
      label: 'Ультразвуковое абдоминальное исследование мочевого пузыря (для мужчин) и предстательной железы',
    },
    {
      name: 'session',
      label: 'Аккредитация',
    },
    {
      name: 'room',
      label: 'Комната 6',
    },
    {
      name: 'group',
      label: '420-11КС',
    },
  ],
  [
    { name: 'date', label: '14.07.2023, 12:00-13:00' },
    {
      name: 'status',
      variant: {
        type: 'chip',
        state: 'plan',
      },
      label: 'Запланировано',
    },
    {
      name: 'module',
      label: 'Реанимация новорожденных',
    },
    {
      name: 'session',
      label: 'Урок',
    },
    {
      name: 'room',
      label: 'Комната 1, Комната 2',
    },
    {
      name: 'group',
      label: '240011С',
    },
  ],
  [
    { name: 'date', label: '05.06.2023, 13:00-14:00' },
    {
      name: 'status',
      variant: {
        type: 'chip',
        state: 'active',
      },
      label: 'Идет',
    },
    {
      name: 'module',
      label: 'Акушерство и гинекология',
    },
    {
      name: 'session',
      label: 'Экзамен',
    },
    {
      name: 'room',
      label: 'Комната 6',
    },
    {
      name: 'group',
      label: 'ТП-31',
    },
  ],
  [
    { name: 'date', label: '05.06.2023, 12:00-13:00' },
    {
      name: 'status',
      variant: {
        type: 'chip',
        state: 'done',
      },
      label: 'Завершено',
    },
    {
      name: 'module',
      label: 'Ультразвуковое абдоминальное исследование мочевого пузыря (для мужчин) и предстательной железы',
    },
    {
      name: 'session',
      label: 'Аккредитация',
    },
    {
      name: 'room',
      label: 'Комната 6',
    },
    {
      name: 'group',
      label: 'КЛ-98',
    },
  ],
  [
    { name: 'date', label: '05.06.2023, 12:00-13:00' },
    {
      name: 'status',
      variant: {
        type: 'chip',
        state: 'done',
      },
      label: 'Завершено',
    },
    {
      name: 'module',
      label: 'Ультразвуковое абдоминальное исследование мочевого пузыря (для мужчин) и предстательной железы',
    },
    {
      name: 'session',
      label: 'Аккредитация',
    },
    {
      name: 'room',
      label: 'Комната 6',
    },
    {
      name: 'group',
      label: 'КЛ-98',
    },
  ],
  [
    { name: 'date', label: '05.06.2023, 11:00-12:00' },
    {
      name: 'status',
      variant: {
        type: 'chip',
        state: 'done',
      },
      label: 'Завершено',
    },
    {
      name: 'module',
      label: 'Ультразвуковое абдоминальное исследование мочевого пузыря (для мужчин) и предстательной железы',
    },
    {
      name: 'session',
      label: 'Аккредитация',
    },
    {
      name: 'room',
      label: 'Комната 6',
    },
    {
      name: 'group',
      label: 'КЛ-98',
    },
  ],
  [
    { name: 'date', label: '05.06.2023, 11:00-12:00' },
    {
      name: 'status',
      variant: {
        type: 'chip',
        state: 'done',
      },
      label: 'Завершено',
    },
    {
      name: 'module',
      label: 'Ультразвуковое абдоминальное исследование мочевого пузыря (для мужчин) и предстательной железы',
    },
    {
      name: 'session',
      label: 'Аккредитация',
    },
    {
      name: 'room',
      label: 'Комната 6',
    },
    {
      name: 'group',
      label: 'КЛ-98',
    },
  ],
  [
    { name: 'date', label: '05.06.2023, 11:00-12:00' },
    {
      name: 'status',
      variant: {
        type: 'chip',
        state: 'done',
      },
      label: 'Завершено',
    },
    {
      name: 'module',
      label: 'Ультразвуковое абдоминальное исследование мочевого пузыря (для мужчин) и предстательной железы',
    },
    {
      name: 'session',
      label: 'Аккредитация',
    },
    {
      name: 'room',
      label: 'Комната 6',
    },
    {
      name: 'group',
      label: 'КЛ-98',
    },
  ],
  [
    { name: 'date', label: '05.06.2023, 11:00-12:00' },
    {
      name: 'status',
      variant: {
        type: 'chip',
        state: 'done',
      },
      label: 'Завершено',
    },
    {
      name: 'module',
      label: 'Ультразвуковое абдоминальное исследование мочевого пузыря (для мужчин) и предстательной железы',
    },
    {
      name: 'session',
      label: 'Аккредитация',
    },
    {
      name: 'room',
      label: 'Комната 6',
    },
    {
      name: 'group',
      label: 'КЛ-98',
    },
  ],
  [
    { name: 'date', label: '05.06.2023, 11:00-12:00' },
    {
      name: 'status',
      variant: {
        type: 'chip',
        state: 'done',
      },
      label: 'Завершено',
    },
    {
      name: 'module',
      label: 'Ультразвуковое абдоминальное исследование мочевого пузыря (для мужчин) и предстательной железы',
    },
    {
      name: 'session',
      label: 'Аккредитация',
    },
    {
      name: 'room',
      label: 'Комната 6',
    },
    {
      name: 'group',
      label: 'КЛ-98',
    },
  ],
  [
    { name: 'date', label: '05.06.2023, 11:00-12:00' },
    {
      name: 'status',
      variant: {
        type: 'chip',
        state: 'done',
      },
      label: 'Завершено',
    },
    {
      name: 'module',
      label: 'Ультразвуковое абдоминальное исследование мочевого пузыря (для мужчин) и предстательной железы',
    },
    {
      name: 'session',
      label: 'Аккредитация',
    },
    {
      name: 'room',
      label: 'Комната 6',
    },
    {
      name: 'group',
      label: 'КЛ-98',
    },
  ],
  [
    { name: 'date', label: '15.07.2023, 12:00 - 13:00' },
    {
      name: 'status',
      variant: {
        type: 'chip',
        state: 'plan',
      },
      label: 'Запланировано1',
    },
    {
      name: 'module',
      label: 'Ультразвуковое исследование органов брюшной полости и забрюшинного пространства',
    },
    {
      name: 'session',
      label: 'Урок',
    },
    {
      name: 'room',
      label: 'Комната 5, Комната 6, Комната 7',
    },
    {
      name: 'group',
      label: 'ТП-31',
    },
  ],
  [
    { name: 'date', label: '15.07.2023, 13:00- 14:00' },
    {
      name: 'status',
      variant: {
        type: 'chip',
        state: 'plan',
      },
      label: 'Запланировано',
    },
    {
      name: 'module',
      label: 'Ультразвуковое абдоминальное исследование мочевого пузыря (для мужчин) и предстательной железы',
    },
    {
      name: 'session',
      label: 'Аккредитация',
    },
    {
      name: 'room',
      label: 'Комната 6',
    },
    {
      name: 'group',
      label: '420-11КС',
    },
  ],
  [
    { name: 'date', label: '14.07.2023, 12:00-13:00' },
    {
      name: 'status',
      variant: {
        type: 'chip',
        state: 'plan',
      },
      label: 'Запланировано',
    },
    {
      name: 'module',
      label: 'Реанимация новорожденных',
    },
    {
      name: 'session',
      label: 'Урок',
    },
    {
      name: 'room',
      label: 'Комната 1, Комната 2',
    },
    {
      name: 'group',
      label: '240011С',
    },
  ],
  [
    { name: 'date', label: '05.06.2023, 13:00-14:00' },
    {
      name: 'status',
      variant: {
        type: 'chip',
        state: 'active',
      },
      label: 'Идет',
    },
    {
      name: 'module',
      label: 'Акушерство и гинекология',
    },
    {
      name: 'session',
      label: 'Экзамен',
    },
    {
      name: 'room',
      label: 'Комната 6',
    },
    {
      name: 'group',
      label: 'ТП-31',
    },
  ],
  [
    { name: 'date', label: '05.06.2023, 12:00-13:00' },
    {
      name: 'status',
      variant: {
        type: 'chip',
        state: 'done',
      },
      label: 'Завершено',
    },
    {
      name: 'module',
      label: 'Ультразвуковое абдоминальное исследование мочевого пузыря (для мужчин) и предстательной железы',
    },
    {
      name: 'session',
      label: 'Аккредитация',
    },
    {
      name: 'room',
      label: 'Комната 6',
    },
    {
      name: 'group',
      label: 'КЛ-98',
    },
  ],
  [
    { name: 'date', label: '05.06.2023, 12:00-13:00' },
    {
      name: 'status',
      variant: {
        type: 'chip',
        state: 'done',
      },
      label: 'Завершено',
    },
    {
      name: 'module',
      label: 'Ультразвуковое абдоминальное исследование мочевого пузыря (для мужчин) и предстательной железы',
    },
    {
      name: 'session',
      label: 'Аккредитация',
    },
    {
      name: 'room',
      label: 'Комната 6',
    },
    {
      name: 'group',
      label: 'КЛ-98',
    },
  ],
  [
    { name: 'date', label: '05.06.2023, 11:00-12:00' },
    {
      name: 'status',
      variant: {
        type: 'chip',
        state: 'done',
      },
      label: 'Завершено',
    },
    {
      name: 'module',
      label: 'Ультразвуковое абдоминальное исследование мочевого пузыря (для мужчин) и предстательной железы',
    },
    {
      name: 'session',
      label: 'Аккредитация',
    },
    {
      name: 'room',
      label: 'Комната 6',
    },
    {
      name: 'group',
      label: 'КЛ-98',
    },
  ],
  [
    { name: 'date', label: '05.06.2023, 11:00-12:00' },
    {
      name: 'status',
      variant: {
        type: 'chip',
        state: 'done',
      },
      label: 'Завершено',
    },
    {
      name: 'module',
      label: 'Ультразвуковое абдоминальное исследование мочевого пузыря (для мужчин) и предстательной железы',
    },
    {
      name: 'session',
      label: 'Аккредитация',
    },
    {
      name: 'room',
      label: 'Комната 6',
    },
    {
      name: 'group',
      label: 'КЛ-98',
    },
  ],
  [
    { name: 'date', label: '05.06.2023, 11:00-12:00' },
    {
      name: 'status',
      variant: {
        type: 'chip',
        state: 'done',
      },
      label: 'Завершено',
    },
    {
      name: 'module',
      label: 'Ультразвуковое абдоминальное исследование мочевого пузыря (для мужчин) и предстательной железы',
    },
    {
      name: 'session',
      label: 'Аккредитация',
    },
    {
      name: 'room',
      label: 'Комната 6',
    },
    {
      name: 'group',
      label: 'КЛ-98',
    },
  ],
  [
    { name: 'date', label: '05.06.2023, 11:00-12:00' },
    {
      name: 'status',
      variant: {
        type: 'chip',
        state: 'done',
      },
      label: 'Завершено',
    },
    {
      name: 'module',
      label: 'Ультразвуковое абдоминальное исследование мочевого пузыря (для мужчин) и предстательной железы',
    },
    {
      name: 'session',
      label: 'Аккредитация',
    },
    {
      name: 'room',
      label: 'Комната 6',
    },
    {
      name: 'group',
      label: 'КЛ-98',
    },
  ],
  [
    { name: 'date', label: '05.06.2023, 11:00-12:00' },
    {
      name: 'status',
      variant: {
        type: 'chip',
        state: 'done',
      },
      label: 'Завершено',
    },
    {
      name: 'module',
      label: 'Ультразвуковое абдоминальное исследование мочевого пузыря (для мужчин) и предстательной железы',
    },
    {
      name: 'session',
      label: 'Аккредитация',
    },
    {
      name: 'room',
      label: 'Комната 6',
    },
    {
      name: 'group',
      label: 'КЛ-98',
    },
  ],
  [
    { name: 'date', label: '05.06.2023, 11:00-12:00' },
    {
      name: 'status',
      variant: {
        type: 'chip',
        state: 'done',
      },
      label: 'Завершено',
    },
    {
      name: 'module',
      label: 'Ультразвуковое абдоминальное исследование мочевого пузыря (для мужчин) и предстательной железы',
    },
    {
      name: 'session',
      label: 'Аккредитация',
    },
    {
      name: 'room',
      label: 'Комната 6',
    },
    {
      name: 'group',
      label: 'КЛ-98',
    },
  ],
  [
    { name: 'date', label: '15.07.2023, 12:00 - 13:00' },
    {
      name: 'status',
      variant: {
        type: 'chip',
        state: 'plan',
      },
      label: 'Запланировано1',
    },
    {
      name: 'module',
      label: 'Ультразвуковое исследование органов брюшной полости и забрюшинного пространства',
    },
    {
      name: 'session',
      label: 'Урок',
    },
    {
      name: 'room',
      label: 'Комната 5, Комната 6, Комната 7',
    },
    {
      name: 'group',
      label: 'ТП-31',
    },
  ],
  [
    { name: 'date', label: '15.07.2023, 13:00- 14:00' },
    {
      name: 'status',
      variant: {
        type: 'chip',
        state: 'plan',
      },
      label: 'Запланировано',
    },
    {
      name: 'module',
      label: 'Ультразвуковое абдоминальное исследование мочевого пузыря (для мужчин) и предстательной железы',
    },
    {
      name: 'session',
      label: 'Аккредитация',
    },
    {
      name: 'room',
      label: 'Комната 6',
    },
    {
      name: 'group',
      label: '420-11КС',
    },
  ],
  [
    { name: 'date', label: '14.07.2023, 12:00-13:00' },
    {
      name: 'status',
      variant: {
        type: 'chip',
        state: 'plan',
      },
      label: 'Запланировано',
    },
    {
      name: 'module',
      label: 'Реанимация новорожденных',
    },
    {
      name: 'session',
      label: 'Урок',
    },
    {
      name: 'room',
      label: 'Комната 1, Комната 2',
    },
    {
      name: 'group',
      label: '240011С',
    },
  ],
  [
    { name: 'date', label: '05.06.2023, 13:00-14:00' },
    {
      name: 'status',
      variant: {
        type: 'chip',
        state: 'active',
      },
      label: 'Идет',
    },
    {
      name: 'module',
      label: 'Акушерство и гинекология',
    },
    {
      name: 'session',
      label: 'Экзамен',
    },
    {
      name: 'room',
      label: 'Комната 6',
    },
    {
      name: 'group',
      label: 'ТП-31',
    },
  ],
  [
    { name: 'date', label: '05.06.2023, 12:00-13:00' },
    {
      name: 'status',
      variant: {
        type: 'chip',
        state: 'done',
      },
      label: 'Завершено',
    },
    {
      name: 'module',
      label: 'Ультразвуковое абдоминальное исследование мочевого пузыря (для мужчин) и предстательной железы',
    },
    {
      name: 'session',
      label: 'Аккредитация',
    },
    {
      name: 'room',
      label: 'Комната 6',
    },
    {
      name: 'group',
      label: 'КЛ-98',
    },
  ],
  [
    { name: 'date', label: '05.06.2023, 12:00-13:00' },
    {
      name: 'status',
      variant: {
        type: 'chip',
        state: 'done',
      },
      label: 'Завершено',
    },
    {
      name: 'module',
      label: 'Ультразвуковое абдоминальное исследование мочевого пузыря (для мужчин) и предстательной железы',
    },
    {
      name: 'session',
      label: 'Аккредитация',
    },
    {
      name: 'room',
      label: 'Комната 6',
    },
    {
      name: 'group',
      label: 'КЛ-98',
    },
  ],
  [
    { name: 'date', label: '05.06.2023, 11:00-12:00' },
    {
      name: 'status',
      variant: {
        type: 'chip',
        state: 'done',
      },
      label: 'Завершено',
    },
    {
      name: 'module',
      label: 'Ультразвуковое абдоминальное исследование мочевого пузыря (для мужчин) и предстательной железы',
    },
    {
      name: 'session',
      label: 'Аккредитация',
    },
    {
      name: 'room',
      label: 'Комната 6',
    },
    {
      name: 'group',
      label: 'КЛ-98',
    },
  ],
  [
    { name: 'date', label: '05.06.2023, 11:00-12:00' },
    {
      name: 'status',
      variant: {
        type: 'chip',
        state: 'done',
      },
      label: 'Завершено',
    },
    {
      name: 'module',
      label: 'Ультразвуковое абдоминальное исследование мочевого пузыря (для мужчин) и предстательной железы',
    },
    {
      name: 'session',
      label: 'Аккредитация',
    },
    {
      name: 'room',
      label: 'Комната 6',
    },
    {
      name: 'group',
      label: 'КЛ-98',
    },
  ],
  [
    { name: 'date', label: '05.06.2023, 11:00-12:00' },
    {
      name: 'status',
      variant: {
        type: 'chip',
        state: 'done',
      },
      label: 'Завершено',
    },
    {
      name: 'module',
      label: 'Ультразвуковое абдоминальное исследование мочевого пузыря (для мужчин) и предстательной железы',
    },
    {
      name: 'session',
      label: 'Аккредитация',
    },
    {
      name: 'room',
      label: 'Комната 6',
    },
    {
      name: 'group',
      label: 'КЛ-98',
    },
  ],
  [
    { name: 'date', label: '05.06.2023, 11:00-12:00' },
    {
      name: 'status',
      variant: {
        type: 'chip',
        state: 'done',
      },
      label: 'Завершено',
    },
    {
      name: 'module',
      label: 'Ультразвуковое абдоминальное исследование мочевого пузыря (для мужчин) и предстательной железы',
    },
    {
      name: 'session',
      label: 'Аккредитация',
    },
    {
      name: 'room',
      label: 'Комната 6',
    },
    {
      name: 'group',
      label: 'КЛ-98',
    },
  ],
  [
    { name: 'date', label: '05.06.2023, 11:00-12:00' },
    {
      name: 'status',
      variant: {
        type: 'chip',
        state: 'done',
      },
      label: 'Завершено',
    },
    {
      name: 'module',
      label: 'Ультразвуковое абдоминальное исследование мочевого пузыря (для мужчин) и предстательной железы',
    },
    {
      name: 'session',
      label: 'Аккредитация',
    },
    {
      name: 'room',
      label: 'Комната 6',
    },
    {
      name: 'group',
      label: 'КЛ-98',
    },
  ],
  [
    { name: 'date', label: '05.06.2023, 11:00-12:00' },
    {
      name: 'status',
      variant: {
        type: 'chip',
        state: 'done',
      },
      label: 'Завершено',
    },
    {
      name: 'module',
      label: 'Ультразвуковое абдоминальное исследование мочевого пузыря (для мужчин) и предстательной железы',
    },
    {
      name: 'session',
      label: 'Аккредитация',
    },
    {
      name: 'room',
      label: 'Комната 6',
    },
    {
      name: 'group',
      label: 'КЛ-98',
    },
  ],
  [
    { name: 'date', label: '15.07.2023, 12:00 - 13:00' },
    {
      name: 'status',
      variant: {
        type: 'chip',
        state: 'plan',
      },
      label: 'Запланировано1',
    },
    {
      name: 'module',
      label: 'Ультразвуковое исследование органов брюшной полости и забрюшинного пространства',
    },
    {
      name: 'session',
      label: 'Урок',
    },
    {
      name: 'room',
      label: 'Комната 5, Комната 6, Комната 7',
    },
    {
      name: 'group',
      label: 'ТП-31',
    },
  ],
  [
    { name: 'date', label: '15.07.2023, 13:00- 14:00' },
    {
      name: 'status',
      variant: {
        type: 'chip',
        state: 'plan',
      },
      label: 'Запланировано',
    },
    {
      name: 'module',
      label: 'Ультразвуковое абдоминальное исследование мочевого пузыря (для мужчин) и предстательной железы',
    },
    {
      name: 'session',
      label: 'Аккредитация',
    },
    {
      name: 'room',
      label: 'Комната 6',
    },
    {
      name: 'group',
      label: '420-11КС',
    },
  ],
  [
    { name: 'date', label: '14.07.2023, 12:00-13:00' },
    {
      name: 'status',
      variant: {
        type: 'chip',
        state: 'plan',
      },
      label: 'Запланировано',
    },
    {
      name: 'module',
      label: 'Реанимация новорожденных',
    },
    {
      name: 'session',
      label: 'Урок',
    },
    {
      name: 'room',
      label: 'Комната 1, Комната 2',
    },
    {
      name: 'group',
      label: '240011С',
    },
  ],
  [
    { name: 'date', label: '05.06.2023, 13:00-14:00' },
    {
      name: 'status',
      variant: {
        type: 'chip',
        state: 'active',
      },
      label: 'Идет',
    },
    {
      name: 'module',
      label: 'Акушерство и гинекология',
    },
    {
      name: 'session',
      label: 'Экзамен',
    },
    {
      name: 'room',
      label: 'Комната 6',
    },
    {
      name: 'group',
      label: 'ТП-31',
    },
  ],
  [
    { name: 'date', label: '05.06.2023, 12:00-13:00' },
    {
      name: 'status',
      variant: {
        type: 'chip',
        state: 'done',
      },
      label: 'Завершено',
    },
    {
      name: 'module',
      label: 'Ультразвуковое абдоминальное исследование мочевого пузыря (для мужчин) и предстательной железы',
    },
    {
      name: 'session',
      label: 'Аккредитация',
    },
    {
      name: 'room',
      label: 'Комната 6',
    },
    {
      name: 'group',
      label: 'КЛ-98',
    },
  ],
  [
    { name: 'date', label: '05.06.2023, 12:00-13:00' },
    {
      name: 'status',
      variant: {
        type: 'chip',
        state: 'done',
      },
      label: 'Завершено',
    },
    {
      name: 'module',
      label: 'Ультразвуковое абдоминальное исследование мочевого пузыря (для мужчин) и предстательной железы',
    },
    {
      name: 'session',
      label: 'Аккредитация',
    },
    {
      name: 'room',
      label: 'Комната 6',
    },
    {
      name: 'group',
      label: 'КЛ-98',
    },
  ],
  [
    { name: 'date', label: '05.06.2023, 11:00-12:00' },
    {
      name: 'status',
      variant: {
        type: 'chip',
        state: 'done',
      },
      label: 'Завершено',
    },
    {
      name: 'module',
      label: 'Ультразвуковое абдоминальное исследование мочевого пузыря (для мужчин) и предстательной железы',
    },
    {
      name: 'session',
      label: 'Аккредитация',
    },
    {
      name: 'room',
      label: 'Комната 6',
    },
    {
      name: 'group',
      label: 'КЛ-98',
    },
  ],
  [
    { name: 'date', label: '05.06.2023, 11:00-12:00' },
    {
      name: 'status',
      variant: {
        type: 'chip',
        state: 'done',
      },
      label: 'Завершено',
    },
    {
      name: 'module',
      label: 'Ультразвуковое абдоминальное исследование мочевого пузыря (для мужчин) и предстательной железы',
    },
    {
      name: 'session',
      label: 'Аккредитация',
    },
    {
      name: 'room',
      label: 'Комната 6',
    },
    {
      name: 'group',
      label: 'КЛ-98',
    },
  ],
  [
    { name: 'date', label: '05.06.2023, 11:00-12:00' },
    {
      name: 'status',
      variant: {
        type: 'chip',
        state: 'done',
      },
      label: 'Завершено',
    },
    {
      name: 'module',
      label: 'Ультразвуковое абдоминальное исследование мочевого пузыря (для мужчин) и предстательной железы',
    },
    {
      name: 'session',
      label: 'Аккредитация',
    },
    {
      name: 'room',
      label: 'Комната 6',
    },
    {
      name: 'group',
      label: 'КЛ-98',
    },
  ],
  [
    { name: 'date', label: '05.06.2023, 11:00-12:00' },
    {
      name: 'status',
      variant: {
        type: 'chip',
        state: 'done',
      },
      label: 'Завершено',
    },
    {
      name: 'module',
      label: 'Ультразвуковое абдоминальное исследование мочевого пузыря (для мужчин) и предстательной железы',
    },
    {
      name: 'session',
      label: 'Аккредитация',
    },
    {
      name: 'room',
      label: 'Комната 6',
    },
    {
      name: 'group',
      label: 'КЛ-98',
    },
  ],
  [
    { name: 'date', label: '05.06.2023, 11:00-12:00' },
    {
      name: 'status',
      variant: {
        type: 'chip',
        state: 'done',
      },
      label: 'Завершено',
    },
    {
      name: 'module',
      label: 'Ультразвуковое абдоминальное исследование мочевого пузыря (для мужчин) и предстательной железы',
    },
    {
      name: 'session',
      label: 'Аккредитация',
    },
    {
      name: 'room',
      label: 'Комната 6',
    },
    {
      name: 'group',
      label: 'КЛ-98',
    },
  ],
  [
    { name: 'date', label: '05.06.2023, 11:00-12:00' },
    {
      name: 'status',
      variant: {
        type: 'chip',
        state: 'done',
      },
      label: 'Завершено',
    },
    {
      name: 'module',
      label: 'Ультразвуковое абдоминальное исследование мочевого пузыря (для мужчин) и предстательной железы',
    },
    {
      name: 'session',
      label: 'Аккредитация',
    },
    {
      name: 'room',
      label: 'Комната 6',
    },
    {
      name: 'group',
      label: 'КЛ-98',
    },
  ],
]
