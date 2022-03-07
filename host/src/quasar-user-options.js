import "./styles/quasar.scss";
import "@quasar/extras/roboto-font/roboto-font.css";
import "@quasar/extras/material-icons/material-icons.css";
import {
  QBtn,
  QToolbarTitle,
  QToolbar,
  QHeader,
  QItemLabel,
  QIcon,
  QItemSection,
  QItem,
  QList,
  QDrawer,
  QPage,
  QPageContainer,
  QLayout,
  QAvatar,
  QTooltip,
  QSpinnerHourglass,
  QToggle,
  Notify,
} from "quasar";

// To be used on app.use(Quasar, { ... })
export default {
  config: {},
  components: [
    QBtn,
    QToolbarTitle,
    QToolbar,
    QHeader,
    QItemLabel,
    QIcon,
    QItemSection,
    QItem,
    QList,
    QDrawer,
    QPage,
    QPageContainer,
    QLayout,
    QAvatar,
    QTooltip,
    QSpinnerHourglass,
    QToggle,
  ],
  plugins: {
    Notify,
  },
};
