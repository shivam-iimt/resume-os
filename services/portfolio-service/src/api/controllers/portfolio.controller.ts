import { Response } from "express";
import { AuthRequest } from "../../types/AuthRequest";
import portfolioService from "../../domain/services/portfolio.service";

export const createPortfolio = async (req: AuthRequest, res: Response) => {
  const data = { ...req.body, userId: req.user!.id };
  const portfolio = await portfolioService.createPortfolio(data);
  res.json(portfolio);
};

export const updatePortfolio = async (req: AuthRequest, res: Response) => {
  const updated = await portfolioService.updatePortfolio(
    req.params.id,
    req.body
  );
  res.json(updated);
};

export const deletePortfolio = async (req: AuthRequest, res: Response) => {
  await portfolioService.deletePortfolio(req.params.id);
  res.json({ message: "Portfolio deleted" });
};

export const getMyPortfolios = async (req: AuthRequest, res: Response) => {
  const portfolios = await portfolioService.getUserPortfolios(req.user!.id);
  res.json(portfolios);
};

export const getPortfolio = async (req: AuthRequest, res: Response) => {
  const portfolio = await portfolioService.getPortfolio(req.params.id);
  res.json(portfolio);
};

export const publicPortfolio = async (req: AuthRequest, res: Response) => {
  const portfolio = await portfolioService.getPortfolioByUsername(
    req.params.username
  );
  res.json(portfolio);
};
