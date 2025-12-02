import React from "react";
import { useAuth } from "../Context/AuthContext";
import { Package, ShoppingCart, DollarSign, Users } from "lucide-react";

const Dashboard = () => {
  const { user } = useAuth();

  const stats = [
    {
      title: "Total Toys",
      value: "248",
      icon: Package,
      color: "bg-blue-500",
      change: "+12%",
    },
    {
      title: "Total Orders",
      value: "89",
      icon: ShoppingCart,
      color: "bg-green-500",
      change: "+8%",
    },
    {
      title: "Revenue",
      value: "$12,480",
      icon: DollarSign,
      color: "bg-purple-500",
      change: "+23%",
    },
    {
      title: "Active Users",
      value: "1,240",
      icon: Users,
      color: "bg-orange-500",
      change: "+5%",
    },
  ];

  const recentOrders = [
    {
      id: "#1024",
      customer: "Ayesha Khan",
      amount: "$89.99",
      status: "Delivered",
    },
    {
      id: "#1023",
      customer: "Omar Faruk",
      amount: "$45.50",
      status: "Processing",
    },
    {
      id: "#1022",
      customer: "Fatima Ahmed",
      amount: "$120.00",
      status: "Shipped",
    },
    {
      id: "#1021",
      customer: "Yusuf Rahman",
      amount: "$67.25",
      status: "Delivered",
    },
  ];

  return (
    <>
      <title>KiddyToy | Dashboard</title>

      <div className="min-h-screen bg-gray-50 py-6 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Welcome Section */}
          <div className="bg-white rounded-2xl shadow-md p-4 sm:p-6 mb-6 sm:mb-8">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-800">
              Welcome back, {user?.displayName || "Admin"}!
            </h2>
            <p className="text-gray-600 mt-1 sm:mt-2 text-sm sm:text-base">
              Here's what's happening with your store today.
            </p>
          </div>

          {/* Stats Cards - Mobile First */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-8">
            {stats.map((stat, idx) => (
              <div
                key={idx}
                className="bg-white rounded-2xl shadow-sm p-4 sm:p-6 hover:shadow-lg transition-transform duration-300 transform hover:-translate-y-1"
              >
                <div className="flex items-center justify-between mb-3">
                  <div className={`p-3 rounded-xl ${stat.color} text-white`}>
                    <stat.icon className="w-6 h-6 sm:w-8 sm:h-8" />
                  </div>
                  <span className="text-xs sm:text-sm font-semibold text-green-600 bg-green-50 px-2 py-1 rounded-full">
                    {stat.change}
                  </span>
                </div>
                <p className="text-gray-600 text-sm font-medium">
                  {stat.title}
                </p>
                <p className="text-2xl sm:text-3xl font-bold text-gray-800 mt-1 sm:mt-2">
                  {stat.value}
                </p>
              </div>
            ))}
          </div>

          {/* Recent Orders + Quick Actions */}
          <div className="flex flex-col lg:flex-row gap-6">
            {/* Recent Orders */}
            <div className="lg:flex-2 bg-white rounded-2xl shadow-md overflow-x-auto">
              <div className="p-4 sm:p-6 border-b border-gray-100">
                <h3 className="text-lg sm:text-xl font-bold text-gray-800">
                  Recent Orders
                </h3>
              </div>
              <table className="min-w-full">
                <thead className="bg-gray-50 border-b border-gray-200">
                  <tr>
                    <th className="text-left px-4 py-2 text-xs sm:text-sm font-semibold text-gray-700">
                      Order ID
                    </th>
                    <th className="text-left px-4 py-2 text-xs sm:text-sm font-semibold text-gray-700">
                      Customer
                    </th>
                    <th className="text-left px-4 py-2 text-xs sm:text-sm font-semibold text-gray-700">
                      Amount
                    </th>
                    <th className="text-left px-4 py-2 text-xs sm:text-sm font-semibold text-gray-700">
                      Status
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {recentOrders.map((order) => (
                    <tr
                      key={order.id}
                      className="border-b border-gray-100 hover:bg-gray-50 transition"
                    >
                      <td className="px-4 py-2 font-medium text-gray-900 text-sm sm:text-base">
                        {order.id}
                      </td>
                      <td className="px-4 py-2 text-gray-700 text-sm sm:text-base">
                        {order.customer}
                      </td>
                      <td className="px-4 py-2 font-semibold text-gray-900 text-sm sm:text-base">
                        {order.amount}
                      </td>
                      <td className="px-4 py-2">
                        <span
                          className={`px-2 py-1 sm:px-3 sm:py-1 rounded-full text-xs sm:text-sm font-medium ${
                            order.status === "Delivered"
                              ? "bg-green-100 text-green-800"
                              : order.status === "Processing"
                              ? "bg-yellow-100 text-yellow-800"
                              : "bg-blue-100 text-blue-800"
                          }`}
                        >
                          {order.status}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Quick Actions */}
            <div className="lg:flex-1 bg-white rounded-2xl shadow-md p-4 sm:p-6">
              <h3 className="text-lg sm:text-xl font-bold text-gray-800 mb-4 sm:mb-6">
                Quick Actions
              </h3>
              <div className="grid grid-cols-1 gap-3 sm:gap-4">
                {[
                  {
                    label: "Add New Toy",
                    color: "bg-blue-600 hover:bg-blue-700",
                  },
                  {
                    label: "View All Orders",
                    color: "bg-green-600 hover:bg-green-700",
                  },
                  {
                    label: "Manage Users",
                    color: "bg-purple-600 hover:bg-purple-700",
                  },
                  {
                    label: "View Analytics",
                    color: "bg-orange-600 hover:bg-orange-700",
                  },
                ].map((action, idx) => (
                  <button
                    key={idx}
                    className={`${action.color} text-white font-semibold py-3 sm:py-4 rounded-xl transition-transform transform hover:scale-105 active:scale-95 shadow`}
                  >
                    {action.label}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
