import { useDisclosure } from "@mantine/hooks";
import { Drawer, Burger } from "@mantine/core";
import { navlinks } from "./Header";

const Sidebar = () => {
  const [opened, { toggle }] = useDisclosure(false);

  return (
    <>
      <Drawer.Root
        className="md:hidden !z-20 !bg-bgColor"
        position="right"
        opened={opened}
        onClose={toggle}
        size="50vw"
      >
        <Drawer.Overlay
          className="!z-30"
          style={{ backgroundOpacity: 0.5, blur: 4 }}
        />
        <Drawer.Content className="!z-40" bg="#0A192F">
          <Drawer.Body className="pt-[18vh] flex flex-col gap-5" bg="#0A192F">
            {navlinks(true, toggle)}
          </Drawer.Body>
        </Drawer.Content>
      </Drawer.Root>

      <Burger
        className="md:!hidden !z-10"
        size="lg"
        color="#64FFDA"
        lineSize={2}
        opened={opened}
        onClick={toggle}
      />
    </>
  );
};

export default Sidebar;
