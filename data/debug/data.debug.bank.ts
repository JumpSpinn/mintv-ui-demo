import { IBankAccountDto } from "@/interfaces/Bank/IBankAccountDto.ts";
import { BankType } from "@/enums/Bank/BankType.ts";
import { IBankConditionDto } from "@/interfaces/Bank/IBankConditionDto.ts";
import { IBankTransactionDto } from "@/interfaces/Bank/IBankTransactionDto.ts";
import { IBankMessageDto } from "@/interfaces/Bank/IBankMessageDto.ts";
import { IBankCardDto } from "@/interfaces/Bank/IBankCardDto.ts";
import { IBankOrderDto } from "@/interfaces/Bank/IBankOrderDto.ts";
import { BankStandingOrderRhythm } from "@/enums/Bank/BankStandingOrderRhythm.ts";
import { IBankCostDto } from "@/interfaces/Bank/IBankCostDto.ts";
import { BankCostType } from "@/enums/Bank/BankCostType.ts";
import { ICreditCardDto } from "@/interfaces/Bank/ICreditCardDto.ts";

export class DebugData_Bank {
	public static readonly BankAccounts: IBankAccountDto[] = [
		{
			Id: 1,
			Type: BankType.MAZE,
			ConditionId: "Debug1",
			CardName: "Das ist ein richtig Cooles Konto und",
			IBAN: "1478269845729658",
			OwnerName: "Owner Name 1",
			Pin: "1234",
			Balance: 100000,
			OnlineBanking: true,
			IsMain: true,
			CreatedAt: 1709373815685
		},
		{
			Id: 2,
			Type: BankType.FLEECA,
			ConditionId: "Debug1",
			CardName: "Card Name 2",
			IBAN: "1478269845729658",
			OwnerName: "Owner Name 2",
			Pin: "5678",
			Balance: -20000,
			OnlineBanking: false,
			IsMain: false,
			CreatedAt: 1709373815685
		},
		{
			Id: 3,
			Type: BankType.LIBERTY,
			ConditionId: "Debug1",
			CardName: "Card Name 3",
			IBAN: "1478269845729658",
			OwnerName: "Owner Name 3",
			Pin: "9012",
			Balance: 3000,
			OnlineBanking: false,
			IsMain: false,
			CreatedAt: 1709373815685
		},
		{
			Id: 4,
			Type: BankType.LOMBANK,
			ConditionId: "Debug1",
			CardName: "Card Name 4",
			IBAN: "1478269845729658",
			OwnerName: "Owner Name 4",
			Pin: "3456",
			Balance: 4000000,
			OnlineBanking: true,
			IsMain: false,
			CreatedAt: 1709373815685
		},
	];
	public static readonly BankConditions: IBankConditionDto[] = [
		{
			Name: "Condition 1",
			TemplateId: "Debug1",
			OpenCost: 10000,
			OnlineCost: 20000,
			CardCost: 50000,
			WithdrawCost: 30000,
			DepositCost: 40000,
		},
		{
			Name: "Condition 2",
			TemplateId: "Debug2",
			OnlineCost: 60000,
			WeeklyCost: 70000,
			DepositCost: 80000,
		},
		{
			Name: "Condition 3",
			TemplateId: "Debug3",
			OpenCost: 90000,
			OnlineCost: 100000,
			CardCost: 120000,
			DepositCost: 110000,
		},
		{
			Name: "Condition 4",
			TemplateId: "Debug4",
			OpenCost: 130000,
			OnlineCost: 140000,
			WeeklyCost: 150000,
			TransferCost: 160000,
			CardCost: 190000,
			WithdrawCost: 170000,
			DepositCost: 180000,
		}
	];
	public static readonly BankTransactions: IBankTransactionDto[] = [
		{ FromNumber: "1478269845729658", Amount: 100_00, Reason: "Bankschalter", CreatedAt: 1709373815681 },
		{ ToNumber: "1478269845729658", Amount: 200_00, Reason: "Bankschalter", CreatedAt: 1709373815682 },
		{ FromNumber: "1478269845729658", ToNumber: "2478269845729658", Amount: 300_00, Reason: "Für deine langen Nägel oder so", CreatedAt: 1709373815683 },
		{ FromNumber: "2478269845729658", ToNumber: "1478269845729658", Amount: 400_00, Reason: "Ich erhalte", CreatedAt: 1709373815684 },
		{ FromNumber: "1478269845729658", Amount: 145_21, Reason: "Irgendwas", CreatedAt: 1709373815681, CardDescription: "Gammelkarte Gammelkarte Gammelkarte Gammelkarte Gammelkarte Gammelkarte Gammelkarte Gammelkarte Gammelkarte Gammelkarte Gammelkarte Gammelkarte" }
	];
	public static readonly BankMessages: IBankMessageDto[] = [
		{ Id: 1, Message: "Nachricht 1 Nachricht 1 Nachricht 1", HasBeenRead: false, CreatedAt: 1709373815681 },
		{ Id: 2, Message: "Nachricht 2 Nachricht 2", HasBeenRead: true, CreatedAt: 1709373815681 },
		{ Id: 3, Message: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores at cupiditate dicta doloribus et exercitationem ipsam laborum necessitatibus nemo nulla odio, optio praesentium qui quibusdam quos repellat ut veritatis, voluptas? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores at cupiditate dicta doloribus et exercitationem ipsam laborum necessitatibus nemo nulla odio, optio praesentium qui quibusdam quos repellat ut veritatis, voluptas?", HasBeenRead: false, CreatedAt: 1709373815681 },
		{ Id: 4, Message: "Nachricht 4 asd asd asd", HasBeenRead: true, CreatedAt: 1709373815681 },
		{ Id: 5, Message: "Nachricht 54 234423 4", HasBeenRead: false, CreatedAt: 1709373815681 },
		{ Id: 6, Message: "Nachricht 6", HasBeenRead: false, CreatedAt: 1709373815681 }
	];
	public static readonly BankCards: IBankCardDto[] = [
		{ Id: 1, Name: "Custom Name 1", Description: "Developer Beschreibung 1", Disabled: false, CreatedAt: 1709353815681 },
		{ Id: 2, Description: "Developer Beschreibung 3", Disabled: true, CreatedAt: 1709173815681 },
		{ Id: 3, Disabled: true, CreatedAt: 1709373815681 },
		{ Id: 4, Name: "Custom Name 2", Disabled: false, CreatedAt: 1704373815681 }
	];
	public static readonly BankOrders: IBankOrderDto[] = [
		{ 
			Id: 1, To: "2478269845729658", Amount: 10000, Description: "Gehalt Max Mustermann",
			Reason: "Gehaltszahlung", Rhythm: BankStandingOrderRhythm.DAILY,
			ExecuteAt: 1709373815681, CreatedAt: 1709373815681,
			Active: true
		},
		{
			Id: 2, To: "2478269845729658", Amount: 20000, Reason: "Schönheits-OP",
			Rhythm: BankStandingOrderRhythm.WEEKLY,
			ExecuteAt: 1709373815681, CreatedAt: 1709373815681,
			Active: false
		},
		{
			Id: 3, To: "2478269845729658", Amount: 30000, Reason: "Zuschuß",
			Rhythm: BankStandingOrderRhythm.DAILY,
			ExecuteAt: 1709373815681, CreatedAt: 1709373815681, LastExecuteAt: 1809373815681,
			Active: false
		},
	];
	public static readonly BankCosts: IBankCostDto[] = [
		{ CostType: BankCostType.OPEN_COST, Amount: 10000 },
		{ CostType: BankCostType.ONLINE_COST, Amount: 20000 },
		{ CostType: BankCostType.WEEKLY_COST, Amount: 30000 },
		{ CostType: BankCostType.TRANSFER_COST, Amount: 40000 },
		{ CostType: BankCostType.CARD_COST, Amount: 50000 },
		{ CostType: BankCostType.WITHDRAW_COST, Amount: 60000 },
		{ CostType: BankCostType.DEPOSIT_COST, Amount: 70000 }
	];
	public static readonly CreditCards: ICreditCardDto[] = [
		{ CardName: "Debug", IBAN: "DEV IBAN", Pin: "1234", Type: BankType.LOMBANK,
			CsiId: {
				ItemId: 123,
				Slot: 0,
				ContainerId: 1
			}
		}
	];
}