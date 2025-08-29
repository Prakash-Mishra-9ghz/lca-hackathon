def run_lca(material, process_type, energy, quantity):
    # Simulated results - replace with T-reX logic later
    carbon = round(2.5 * quantity if process_type == "primary" else 1.2 * quantity, 2)
    recycled_pct = 70 if process_type == "recycled" else 0
    efficiency = "High" if process_type == "recycled" else "Moderate"

    return {
        "carbon": carbon,
        "recycled_pct": recycled_pct,
        "efficiency": efficiency
    }
