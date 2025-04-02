import DefaultIdea from "./DefaultIdea";

const defaultIdeas = [
  {
    idea: "Show upcoming events",
    moreContext: "Show me upcoming events in MNNIT",
  },
  {
    idea: "Give me directions to CSED",
    moreContext:
      "Give me directions to CSED from Ganga Gate",
  },
  { idea: "Tell me about MNNIT", moreContext: "Tell me about MNNIT" },
  {
    idea: "Eligibility criteria for MNNIT",
    moreContext: "What is the eligibility criteria for MNNIT?",
  },
];

export default function DefaultIdeas({ visible = true }) {
  return (
    <div className={`row1 ${visible ? "block" : "hidden"}`}>
      <DefaultIdea ideas={defaultIdeas.slice(0, 2)} />
      <DefaultIdea
        ideas={defaultIdeas.slice(2, 4)}
        myclassNames="hidden md:visible"
      />
    </div>
  );
}
