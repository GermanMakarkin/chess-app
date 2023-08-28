import { Square } from "./Square";
import { Colors } from "./Colors";
class Board {
  squares: Square[][] = [];

  public initSquares() {
    for (let i = 0; i < 8; i++) {
      const row: Square[] = [];
      for (let j = 0; j < 8; j++) {
        if ((i + j) % 2 === 0) {
          row.push(new Square(this, j, i, Colors.BLACK));
        } else {
          row.push(new Square(this, i, j, Colors.WHITE));
        }
      }
      this.squares.push(row);
    }
  }
}

export default Board;