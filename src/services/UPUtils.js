export default class UPUtils {
    static slotTimeString(slotIndex) {
        return ((Math.floor(slotIndex / 2) + 11) % 12 + 1) + ':' + (slotIndex % 2 * 30).toString().padStart(2, '0') + (slotIndex >= 24 ? ' PM' : ' AM');
    }
}