ServerEvents.recipes((event) => {
  const greg = event.recipes.gtceu;

  event.remove({ output: "megacells:printed_accumulation_processor" });

  greg
    .forming_press("gtceu:megacells_printed_accumulation_processor")
    .itemInputs("#forge:plates/black_steel", "gtceu:energium_dust")
    .notConsumable("megacells:accumulation_processor_press")
    .itemOutputs("megacells:printed_accumulation_processor")
    .duration(300)
    .EUt(480);
});
