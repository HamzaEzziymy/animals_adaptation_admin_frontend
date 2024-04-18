import {
  BanknotesIcon,
  UserPlusIcon,
  UsersIcon,
  ChartBarIcon,
  CogIcon,
  DocumentTextIcon,
} from "@heroicons/react/24/solid";

export const statisticsCardsData = [
  {
    color: "gray",
    icon: UsersIcon,
    title: "All Users",
    value: (23434).toLocaleString('en'),
    footer: {
      color: "text-green-500",
      value: "+55%",
      label: "than last week",
    },
  },
  {
    color: "gray",
    icon: CogIcon,
    title: "Service's",
    value: (23434).toLocaleString('en'),
    footer: {
      color: "text-green-500",
      value: "+3%",
      label: "than last week",
    },
  },
  {
    color: "gray",
    icon: DocumentTextIcon,
    title: "Publications",
    value: (23434).toLocaleString('en'),
    footer: {
      color: "text-red-500",
      value: -2+"%",
      label: "than last week",
    },
  },
  {
    color: "gray",
    icon: ChartBarIcon,
    title: "Website Visits",
    value: (23434).toLocaleString('en'),
    footer: {
      color: "text-green-500",
      value: "+"+5+"%",
      label: "than last week",
    },
  },
];

export default statisticsCardsData;
