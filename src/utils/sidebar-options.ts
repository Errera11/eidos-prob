import type { Routes } from '@/App.vue'
import type { Component } from 'vue'

import Archive from '@/assets/icons/archive.svg'
import DeviceList from '@/assets/icons/device-list.svg'
import Rooms from '@/assets/icons/rooms.svg'
import SystemPref from '@/assets/icons/system-preferences.svg'
import TeachingClasses from '@/assets/icons/teaching-classes.svg'
import Timetable from '@/assets/icons/timetable.svg'
import Users from '@/assets/icons/users.svg'

interface IOption {
  label: string
  icon: Component
  link: Routes
}

export const options: IOption[] = [
  {
    label: 'Расписание',
    icon: Timetable,
    link: '/timetable',
  },
  {
    label: 'Учебные сессии',
    icon: TeachingClasses,
    link: '/',
  },
  {
    label: 'Список комнат',
    icon: Rooms,
    link: '/rooms',
  },
  {
    label: 'Пользователи',
    icon: Users,
    link: '/users',
  },
  {
    label: 'Учебные группы',
    icon: TeachingClasses,
    link: '/groups',
  },
  {
    label: 'Список устройств',
    icon: DeviceList,
    link: '/devices',
  },
  {
    label: 'Настройки системы',
    icon: SystemPref,
    link: '/preferences',
  },
  {
    label: 'Архив',
    icon: Archive,
    link: '/archive',
  },
]
