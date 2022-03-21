import React from "react";

import { createStackNavigator, TransitionPresets } from "@react-navigation/stack";

import { StaffOrderScreen } from "../../views/staff/screens/staff-order-screen/staff-order.screen";
import { StaffOrderDetailsScreen } from "../../views/staff/screens/staff-order-details/staff-order-details.screen";
import { StaffOrderHistoryScreen } from "../../views/staff/screens/staff-order-history/staff-order-history.screen";
import { StaffScreen } from "../../views/staff/screens/staff-screen/staff.screen";
import { StaffManagementScreen } from "../../views/staff/screens/staff-management/staff-management.screen";
import { CustomerManagementScreen } from "../../views/customer/screens/customer-management/customer-management.screen";
import { ItemScreen } from "../../views/item/screens/item-screen/item.screen";

const AdminStack = createStackNavigator();

export const AdminNavigator = () => {
  return (
    <AdminStack.Navigator headerMode="none" screenOptions={{
      ...TransitionPresets.ModalPresentationIOS
    }}>
      <AdminStack.Screen 
        name="StaffScreen"
        component={StaffScreen}
      />

      <AdminStack.Screen 
        name="StaffOrder"
        component={StaffOrderScreen}
      />

      <AdminStack.Screen 
        name="StaffManagement"
        component={StaffManagementScreen}
      />

      <AdminStack.Screen 
        name="CustomerManagement"
        component={CustomerManagementScreen}
      />

      <AdminStack.Screen 
        name="ItemScreen"
        component={ItemScreen}
      />

      <AdminStack.Screen 
        name="StaffOrderDetails"
        component={StaffOrderDetailsScreen}
      />

      <AdminStack.Screen 
        name="StaffOrderHistory"
        component={StaffOrderHistoryScreen}
      />
    </AdminStack.Navigator>
  );
}