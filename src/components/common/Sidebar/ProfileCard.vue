<script lang="ts" setup>
import Profilestub from '@/assets/icons/profile-stub.svg'
import Typography from '@/components/common/Typography.vue'
</script>

<template>
  <div class="profileCard">
    <div class="profileCard__info">
      <Typography type="span">
        Барнаби Мармадюк
      </Typography>

      <Typography type="sub" classnames="profileCard__position">
        Преподаватель
      </Typography>
    </div>

    <Profilestub class="profileCard__stub" />
  </div>
</template>

<style lang="scss" scoped>
.profileCard {
  display: flex;
  gap: 12px;
  width: 100%;
  border-radius: 16px;
  padding: 12px;
  box-shadow: 0 4px 24px 0 #0000001F;
  justify-content: space-between;

  &__info {
    display: flex;
    flex-direction: column;
  }

  &__position {
    color: #2F3144A6;
  }
}
</style>
