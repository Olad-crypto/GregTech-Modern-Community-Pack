ServerEvents.recipes((event) => {
  const greg = event.recipes.gtceu;

  event.remove({ output: "megacells:accumulation_processor_press" });

  greg
    .laser_engraver("gtceu:megacells_accumulation_processor_press")
    .itemInputs("ae2:engineering_processor_press")
    .notConsumable("gtceu:black_glass_lens")
    .itemOutputs("megacells:accumulation_processor_press")
    .duration(1000)
    .EUt(1920);
});
