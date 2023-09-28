"use client";
import { RootState } from "@/lib/redux/store";
import {
  Divider,
  Spinner,
  Tab,
  Tabs,
} from "@nextui-org/react";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { numberToLetter } from "@/lib/utils";

const OutputSection = () => {
  const [notes, setNotes] = useState<string[]>([]);
  const mcq = useSelector((state: RootState) => state.global.mcq);
  const mcqLoading = useSelector((state: RootState) => state.global.mcqLoading);

  useEffect(() => {
   
    const lines: string[] =
      mcq?.input.replace(/\r\n|\r|\n|\r\n\r\n|\r\n/g, "  ").split("  ") || []; //.replace(/\r/g, '  ').split('\n') || [];
    setNotes(lines);
  }, [mcq]);

  return (
    <div className="max-w-[1400px] bg-white  pt-10  w-full  flex flex-col rounded-md  mb-10 ">
      <Tabs
        aria-label="Options"
        color="primary"
        className="  w-full  flex items-center justify-center pb-6 border-b"
      >
        <Tab
          key="notes"
          title="Notes"
          className="flex items-center justify-center flex-col p-3 md:p-6"
        >
          {mcqLoading ? (
            <Spinner size="lg" />
          ) : (
            <div className="w-full h-full  flex flex-col gap-1  justify-center items-start">
                 <h2 className="text-xl font-semibold text-center w-full">Notes</h2>
              {notes.map((n, i) => (
                <div key={i} className="w-full break-words">
                  {/* {n} */}
                  {n
                    .replace("\\r", "")
                    .replace("\\n", "")
                    .replace("\\r\\n\\r\\n", "")
                    .replace("\\r\\n", "")
                    .replace("\r\n", "")}
                </div>
              ))}
            </div>
          )}
        </Tab>
        <Tab
          key="questions"
          title="Questions"
          className="flex items-center justify-center flex-col p-3 md:p-6"
        >
          {mcqLoading ? (
            <Spinner size="lg" />
          ) : (
            <div className="shadow-sm  w-full h-full  flex flex-col gap-3  justify-start items-center">
              <h2 className="text-xl font-semibold">Generated MCQ Questions</h2>

              {mcq?.questions.map((q, i) => (
                <div className="w-full  p-3" key={i}>
                  <div className="flex flex-col justify-start items-start gap-2">
                    <div className="text-lg ">
                      <strong>
                        {i + 1}. {q.question}{" "}
                      </strong>{" "}
                    </div>
                    <div> A) {q.a} </div>
                    <div> B) {q.b} </div>
                    <div> C) {q.c} </div>
                    <div> D) {q.d} </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </Tab>
        <Tab
          key="answers"
          title="Answers"
          className="flex items-center justify-center flex-col p-3 md:p-6"
        >
           {mcqLoading ? (
            <Spinner size="lg" />
          ) : (
            <div className="w-full h-full flex flex-col justify-center items-start gap-4">
                 <h2 className="text-xl font-semibold text-center w-full">Answers</h2>
              {mcq?.answers.map((a, i) => (
                <div key={i} className="">
                  <div className="text-lg ">
                      <strong>
                        {i + 1}. {a.question}{" "}
                      </strong>{" "}
                    </div>
                    <div> {a.option.toUpperCase()}) {a.answer} </div>
                </div>
              ))}
            </div>
          )}
        </Tab>
      </Tabs>
    </div>
  );
};

export default OutputSection;
