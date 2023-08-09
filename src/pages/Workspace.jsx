import { Icon } from "@iconify/react";
import PageDescription from "../components/page-description";
import Layout from "../components/layout";

const Workspace = () => {
  return (
    <Layout>
      <div className="container">
        <PageDescription title={"Your Workspace"} subtitle={"Welcome, xxx"} />
        <div className="pt-7">
          <h4 className="font-bold">Overview</h4>
          <div className="mt-5 grid grid-cols-2 gap-5xlarge pr-4xlarge">
            <div className="border-t-8 border-yellow-60 shadow-md bg-white">
              <div className="bg-red-50">
                <div className="flex justify-between px-3 py-1.5">
                  <h4 className="font-bold text-sm">Today's Agenda</h4>
                </div>
              </div>
              <div className="flex items-center p-3xlarge">
                <p className="text-grey-50 font-medium text-base">
                  You don't have any event schedule for today.
                </p>
                <span className="text-yellow-60 font-medium ml-1">Add</span>
              </div>
            </div>
            <div className="border-t-8 border-yellow-60 shadow-md bg-white pb-5xlarge">
              <div className="bg-red-50">
                <div className="flex justify-between px-3 py-1.5">
                  <div className="font-bold text-sm">Activity Report</div>
                  <div className="flex">
                    <span className="text-yellow-60 text-xs">
                      View full activity report
                    </span>
                    <span className="mt-1 ml-1">
                      <Icon
                        icon="teenyicons:arrow-right-solid"
                        color="#ca8a04"
                        width="12"
                        height="12"
                      />
                    </span>
                  </div>
                </div>
              </div>
              <div className="mt-2 px-3">
                <div className="w-full flex">
                  <hr className="border-1 border-gray-300 w-96 mt-3 mr-1" />
                  <span className="text-xs text-grey-50">
                    Tuesday (18th Sept. 2019)
                  </span>
                </div>
                <p className="text-grey-50 font-medium text-base">
                  You added a new client
                </p>
                <div className="pl-4xlarge">
                  <p className="text-yellow-60 text-xs font-medium">
                    Odusote Mayokun
                  </p>
                  <span className="text-grey-50 bg-red-50 p-1 pr-2 border-l-2 border-yellow-60 text-xs font-medium">
                    Status: Pending
                  </span>
                </div>
              </div>
            </div>
            <div className="border-t-8 border-yellow-60 shadow-md bg-white pb-5xlarge">
              <div className="bg-red-50">
                <div className="flex justify-between px-3 py-1.5">
                  <div className="font-bold text-sm">Tasks that are due</div>
                  <div className="flex">
                    <span className="text-yellow-60 text-xs">Create Tasks</span>
                    <span className="mt-1 ml-1">
                      <Icon
                        icon="teenyicons:arrow-right-solid"
                        color="#ca8a04"
                        width="12"
                        height="12"
                      />
                    </span>
                  </div>
                </div>
              </div>
              <div className="px-4 py-2">
                <div className="mt-2 px-3  bg-red-50 rounded py-2">
                  <p className="font-bold text-base">
                    Follow up with{" "}
                    <span className="text-yellow-60">Odusote</span>
                  </p>
                  <div>
                    <span className="text-xs font-medium">
                      Due on: 1/21/2021
                    </span>
                    <span className="text-xs font-medium ml-4">
                      Created on: 1/15/2021
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Workspace;
