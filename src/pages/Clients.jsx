import { Table, TableBody } from "@radix-ui/themes";
import { Icon } from "@iconify/react";
import Layout from "../components/layout";
import PageDescription from "../components/page-description";
import data from "../components/data.json";

const Clients = () => {

  return (
    <Layout>
      <div className="container">
        <PageDescription
          title={"Clients"}
          subtitle={"Here's the clients list"}
        />
        <div className="rounded-lg bg-white pt-5 p-xlarge mt-4">
          <div className="flex items-center mt-3">
            <div className="flex w-full items-center px-small py-[6px] border-2 rounded-rounded">
              <Icon
                icon="ic:twotone-search"
                color="#94a3b8"
                width="18"
                height="18"
                className="mr-2"
              />
              <form>
                <input
                  type="text"
                  name="search"
                  placeholder="Search by name, email ..."
                  className="outline-none"
                />
              </form>
            </div>
            <div className="w-44 ml-7">
              <button className="text-white text-sm font-semibold rounded-lg py-2 px-4">
                Add new Client
              </button>
            </div>
          </div>
          <div className="py-10">
            <Table.Root>
              <Table.Header className="bg-red-50 border-b border-yellow-50">
                <Table.Row>
                  <Table.ColumnHeaderCell>Name</Table.ColumnHeaderCell>
                  <Table.ColumnHeaderCell>Email</Table.ColumnHeaderCell>
                  <Table.ColumnHeaderCell>Phone</Table.ColumnHeaderCell>
                  <Table.ColumnHeaderCell>
                    Residential Address
                  </Table.ColumnHeaderCell>
                </Table.Row>
              </Table.Header>

              <TableBody>
                {data.map((item, id) => (
                  <Table.Row key={id} align="center">
                    <Table.Cell>{item.name}</Table.Cell>
                    <Table.Cell>{item.email}</Table.Cell>
                    <Table.Cell>{item.phone}</Table.Cell>
                    <Table.Cell>
                      <span>{item.address.street}</span>
                      <br />
                      <span>{item.address.state}</span>
                    </Table.Cell>
                  </Table.Row>
                ))}
              </TableBody>
            </Table.Root>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Clients;
