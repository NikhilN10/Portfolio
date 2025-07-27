// import { Modal, ScrollArea, ActionIcon, Tooltip } from "@mantine/core";
// import { useDisclosure } from "@mantine/hooks";
// import { IconArrowBigDownLineFilled } from "@tabler/icons-react";
// import React from "react";
// import { Page, Document, pdfjs } from "react-pdf";
// import { Info } from "../Info";
// // import CV from '../CV.pdf'

// pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;
// const ResumeViewer = (props: any) => {
//   const [opened, { open, close }] = useDisclosure(false);

//   return (
//     <div>
//       {" "}
//       <Modal.Root
//         data-autofocus
//         scrollAreaComponent={ScrollArea.Autosize}
//         size="auto"
//         className="font-mono"
//         opened={props.opened}
//         onClose={props.close}
//       >
//         <Modal.Overlay />
//         <Modal.Content className="!rounded-3xl">
//           <Modal.Header className="!bg-bgColor !border-2 !border-b-0 !border-primaryColor !rounded-tr-3xl !rounded-tl-3xl">
//             <Modal.Title className="!text-4xl text-white flex items-center gap-3 !font-bold">
//               Resume
//               <Tooltip
//                 label="Download"
//                 className="!text-bgColor"
//                 color="#64FFDA"
//                 position="right"
//                 offset={5}
//               >
//                 <ActionIcon
//                   className="text-primaryColor"
//                   component="a"
//                   href="\Nikhil Belgaonkar_Resume.pdf"
//                   download={Info.name}
//                   variant="outline"
//                   color="#64FFDA"
//                 >
//                   <IconArrowBigDownLineFilled />
//                 </ActionIcon>
//               </Tooltip>
//             </Modal.Title>
//             <Modal.CloseButton
//               size="md"
//               iconSize="30px"
//               className="!bg-bgColor !text-red-500"
//             />
//           </Modal.Header>
//           <Modal.Body className="!bg-bgColor !p-2 !border-2 !border-t-0 !border-primaryColor !rounded-br-3xl !rounded-bl-3xl">
//             <Document file={"Nikhil Belgaonkar_Resume.pdf"}>
//               <Page
//                 pageNumber={1}
//                 renderTextLayer={false}
//                 renderAnnotationLayer={false}
//               />
//             </Document>
//           </Modal.Body>
//         </Modal.Content>
//       </Modal.Root>
//     </div>
//   );
// };
import { Modal, ScrollArea, ActionIcon, Tooltip } from "@mantine/core";
// import { useDisclosure } from "@mantine/hooks";
import { IconArrowBigDownLineFilled } from "@tabler/icons-react";
import React from "react";
import { Page, Document, pdfjs } from "react-pdf";
import { Info } from "../Info";

// Set workerSrc to CDN as recommended by react-pdf docs
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

const ResumeViewer = (props: any) => {
  return (
    <Modal.Root
      data-autofocus
      scrollAreaComponent={ScrollArea.Autosize}
      size="auto"
      className="font-mono"
      opened={props.opened}
      onClose={props.close}
    >
      <Modal.Overlay />
      <Modal.Content className="!rounded-3xl">
        <Modal.Header className="!bg-bgColor !border-2 !border-b-0 !border-primaryColor !rounded-tr-3xl !rounded-tl-3xl">
          <Modal.Title className="!text-4xl text-white flex items-center gap-3 !font-bold">
            Resume
            <Tooltip
              label="Download"
              className="!text-bgColor"
              color="#64FFDA"
              position="right"
              offset={5}
            >
              <ActionIcon
                className="text-primaryColor"
                component="a"
                href="/Nikhil Belgaonkar_Resume.pdf"
                download={Info.name}
                variant="outline"
                color="#64FFDA"
              >
                <IconArrowBigDownLineFilled />
              </ActionIcon>
            </Tooltip>
          </Modal.Title>
          <Modal.CloseButton
            size="md"
            iconSize="30px"
            className="!bg-bgColor !text-red-500"
          />
        </Modal.Header>
        <Modal.Body className="!bg-bgColor !p-2 !border-2 !border-t-0 !border-primaryColor !rounded-br-3xl !rounded-bl-3xl">
          <Document file="/Nikhil Belgaonkar_Resume.pdf">
            <Page
              pageNumber={1}
              renderTextLayer={false}
              renderAnnotationLayer={false}
            />
          </Document>
        </Modal.Body>
      </Modal.Content>
    </Modal.Root>
  );
};

export default ResumeViewer;
