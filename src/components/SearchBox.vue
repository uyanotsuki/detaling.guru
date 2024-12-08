<template>
    <div class="favorites-search">
        <div class="search-box">
          <span class="search-icon">
            <svg
              width="15"
              height="15"
              viewBox="0 0 15 15"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clip-path="url(#clip0_442_164)">
                <path
                  d="M14.8174 13.9331L11.0867 10.2025C12.1034 8.95911 12.6032 7.37254 12.4829 5.77096C12.3625 4.16938 11.6312 2.67532 10.4402 1.59781C9.2492 0.520305 7.68959 -0.0582065 6.084 -0.0180617C4.47841 0.0220832 2.94966 0.677813 1.81398 1.81349C0.678301 2.94918 0.0225715 4.47792 -0.0175734 6.08351C-0.0577183 7.68911 0.520793 9.24871 1.5983 10.4397C2.67581 11.6307 4.16987 12.3621 5.77145 12.4824C7.37303 12.6027 8.9596 12.1029 10.203 11.0862L13.9336 14.8169C14.0515 14.9307 14.2094 14.9937 14.3732 14.9923C14.5371 14.9909 14.6939 14.9251 14.8097 14.8092C14.9256 14.6934 14.9913 14.5366 14.9928 14.3727C14.9942 14.2089 14.9312 14.051 14.8174 13.9331ZM6.25047 11.25C5.26157 11.25 4.29487 10.9567 3.47262 10.4073C2.65038 9.85793 2.00951 9.07703 1.63108 8.1634C1.25264 7.24977 1.15362 6.24444 1.34655 5.27453C1.53947 4.30463 2.01568 3.41371 2.71494 2.71445C3.4142 2.01519 4.30512 1.53899 5.27502 1.34606C6.24493 1.15313 7.25026 1.25215 8.16389 1.63059C9.07752 2.00903 9.85841 2.64989 10.4078 3.47213C10.9572 4.29438 11.2505 5.26108 11.2505 6.24999C11.249 7.57561 10.7217 8.84652 9.78436 9.78388C8.847 10.7212 7.5761 11.2485 6.25047 11.25Z"
                  fill="black"
                />
              </g>
              <defs>
                <clipPath id="clip0_442_164">
                  <rect width="15" height="15" fill="white" />
                </clipPath>
              </defs>
            </svg>
          </span>
          <input class="favorites__input" type="text" placeholder="Поиск" />
        </div>
        <div class="btn-box">
          <button class="favorites__btn">Убрать фильтры</button>
          <svg
            width="15"
            height="15"
            viewBox="0 0 15 15"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clip-path="url(#clip0_2021_78)">
              <path
                d="M8.75042 15C8.61518 15 8.4836 14.9561 8.37542 14.875L5.87542 13C5.79779 12.9418 5.73479 12.8663 5.6914 12.7795C5.64801 12.6927 5.62542 12.597 5.62542 12.5V8.9875L1.24042 4.05438C0.92899 3.70305 0.725652 3.26926 0.65484 2.80515C0.584028 2.34103 0.648755 1.86634 0.841242 1.43813C1.03373 1.00992 1.34578 0.646412 1.7399 0.391291C2.13402 0.13617 2.59343 0.000296512 3.06292 0L11.9379 0C12.4074 0.000550657 12.8667 0.13665 13.2606 0.391942C13.6546 0.647234 13.9664 1.01086 14.1587 1.43912C14.351 1.86737 14.4155 2.34205 14.3445 2.80609C14.2735 3.27014 14.0701 3.70381 13.7585 4.055L9.37542 8.9875V14.375C9.37542 14.5408 9.30957 14.6997 9.19236 14.8169C9.07515 14.9342 8.91618 15 8.75042 15ZM6.87542 12.1875L8.12542 13.125V8.75C8.12554 8.59697 8.18181 8.44931 8.28354 8.335L12.826 3.22438C12.9775 3.05318 13.0763 2.8419 13.1107 2.61591C13.145 2.38992 13.1134 2.15881 13.0196 1.95035C12.9259 1.74188 12.7739 1.56491 12.582 1.44068C12.3902 1.31645 12.1665 1.25024 11.9379 1.25H3.06292C2.83445 1.25035 2.61093 1.31659 2.41917 1.44079C2.22741 1.56499 2.07554 1.74187 1.98179 1.95022C1.88804 2.15857 1.85639 2.38954 1.89062 2.61543C1.92485 2.84131 2.02352 3.05253 2.17479 3.22375L6.71792 8.335C6.81943 8.4494 6.87546 8.59706 6.87542 8.75V12.1875Z"
                fill="black"
              />
            </g>
            <defs>
              <clipPath id="clip0_2021_78">
                <rect width="15" height="15" fill="white" />
              </clipPath>
            </defs>
          </svg>
        </div>
        <select class="select-btn" name="">
          <option class="select__option" value="name">По названию</option>
          <option class="select__option" value="price">По цене(дешевые)</option>
          <option class="select__option" value="-price">По цене(дорогие)</option>
        </select>
      </div>
</template>

<style scoped>
.search-box {
    position: relative;
    width: 100%;
}

.search-icon {
  position: absolute;
  top: 50%;
  left: 14px;
  transform: translateY(-50%);
  pointer-events: none;
  display: flex;
  align-items: center;
  justify-content: center;
}

.favorites__input {
  font-size: 16px;
  color: #000000;
  padding: 8px 48px;
  background: transparent;
  outline: none;
  border: 1px solid #000000;
  width: 100%;
}

.btn-box {
    display: flex;
    align-items: center;
}

.favorites__btn {
    max-width: 150px;
    font-size: 14px;
    width: 150px;
}

.favorites-search {
  display: flex;
  align-items: center;
  gap: 28px;
}

.select-btn {
    font-family: Montserrat;
    font-size: 14px;
    border: none;
    outline: none;
    background: transparent;
    cursor: pointer;
}

.select__option {
    font-family: Montserrat;
    font-size: 14px;
    cursor: pointer;
}
</style>