ServerEvents.recipes((event) => {
  const greg = event.recipes.gtceu;

  event.remove({ output: "megacells:accumulation_processor" });

  greg
    .assembler("gtceu:megacells_accumulation_processor")
    .itemInputs(
      "ae2:printed_silicon",
      "megacells:printed_accumulation_processor",
      "ae2:fluix_crystal"
    )
    .itemOutputs("megacells:accumulation_processor")
    .duration(80)
    .EUt(480);
});
