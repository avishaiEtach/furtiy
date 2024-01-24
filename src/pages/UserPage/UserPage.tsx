import { useSelector } from "react-redux";
import { RootState } from "../../store/store/store";
import { Loader } from "../../components/Loader/Loader";
import PersonIcon from "@mui/icons-material/Person";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import PlaceIcon from "@mui/icons-material/Place";
import { UserDetails } from "./components/UserDetails";
import BallotIcon from "@mui/icons-material/Ballot";
import { UserReview } from "./components/UserReview";
import "./UserPage.scss";

export function UserPage() {
  const { user } = useSelector((state: RootState) => state.productsModel);

  if (!user) {
    return <Loader type="progress" fullHight={true} />;
  }

  return (
    <div className="flex column" style={{ marginBlock: "50px" }}>
      <div className="flex" style={{ gap: "45px" }}>
        <div className="flex user__details__user__image__container">
          <img src={user.picture.large} alt="User Profile" />
        </div>
        <div className="flex column g30">
          <div className="flex g20 align-center">
            <span className="fs28 user__details__user__name">{`${user.name.first} ${user.name.last}`}</span>
            <div className="flex align-center fs14 user__details__user__address">
              <PlaceIcon />
              <div className="flex g5 align-center user__details__user__address__container">
                <span>{user.location?.street?.number}</span>
                <span>{user.location?.street?.name}</span>
                <span>{user.location?.city}</span>
                <span>{user.location?.country}</span>
              </div>
            </div>
          </div>
          <Tabs className={"user__page__tabs"}>
            <TabList className={"react-tabs__tab-list flex g10"}>
              <Tab className={"react-tabs__tab"}>
                <div className="flex g10 align-center tab__info">
                  <PersonIcon className="user__details__user__tab__icon" />
                  <span className="user__details__user__tab__name">About</span>
                </div>
              </Tab>
              <Tab className={"react-tabs__tab"}>
                <div className="flex g10 align-center tab__info">
                  <BallotIcon className="user__details__user__tab__icon" />
                  <span className="user__details__user__tab__name">
                    Last Reviews
                  </span>
                </div>
              </Tab>
            </TabList>
            <TabPanel>{<UserDetails />}</TabPanel>
            <TabPanel>{<UserReview />}</TabPanel>
          </Tabs>
        </div>
      </div>
    </div>
  );
}
