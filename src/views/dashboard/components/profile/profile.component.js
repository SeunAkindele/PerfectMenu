import React from "react";
import {Text} from "../../../../components/typography/text.component";
import { ucWord } from "../../../../components/utility/functions";
import {  DashboardProfile, User, DashboardProfileCover } from "./profile.component.styles";

export const Profile = ({user}) => {

  return (
   
          <DashboardProfileCover>
            <Text variant="tag" color="black">Dashboard</Text>
            <DashboardProfile>
              <Text variant="small" color="black">{ucWord(user.name)}</Text>
              <User name="user-circle-o" />
            </DashboardProfile>
          </DashboardProfileCover>
         
  )
}